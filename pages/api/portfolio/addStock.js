import firebase from 'firebase';
import { collections } from '../../../constants/index';

function purchaseToJson(purchase) {
  return {
    id: purchase.id,
    ticker: purchase.ticker,
    date: purchase.date,
    amount: purchase.amount,
    price: purchase.price,
  };
}

export default async function handler(req, res) {
  const db = firebase.firestore();
  const body = JSON.parse(req.body);
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }
  try {
    const { purchase } = body;
    const { portfolioId } = body;
    const batch = db.batch();
    const portfolioDoc = db.collection(collections.users)
      .doc(body.uid)
      .collection(collections.portfolio)
      .doc(portfolioId || 'main');
    const purchaseDoc = db.collection(collections.users)
      .doc(body.uid)
      .collection(collections.purchases)
      .doc(purchase.id)
      .set(purchaseToJson(purchase), { merge: true });
    batch.set(purchaseDoc, purchaseToJson(purchase), { merge: true });
    batch.update(portfolioDoc, firebase.firestore.FieldValue.arrayUnion(purchase.id));
    const result = await batch.commit();
    debugger;
    res.status(200).send({ ok: true });
  } catch (ex) {
    debugger;
    res.status(500).send({ message: ex.message });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};
