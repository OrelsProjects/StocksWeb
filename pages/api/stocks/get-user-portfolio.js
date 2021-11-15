

export default function GetUserPortfolio(req, res) {
    debugger;
    console.log(req.query);
    if (req.method !== 'GET') {
        res.status(400).send({ message: 'Only GET requests are allowed' });
        return;
    }
    const { uid } = req.query;
    if (!uid) {
        res.status(400).send({ message: 'uid cannot be null!' });
    }
    res.status(200).send("done");
}