import firebase from 'firebase';

export default function handler(req, res) {
  const db = firebase.firestore();
  const body = JSON.parse(req.body);
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }
  try {
    const { purchase } = body;
    debugger;
    db.collection(body.uid);
    res.status(200).send({ ok: true });
  } catch (ex) {
    res.status(500).send({ message: ex.message });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};
