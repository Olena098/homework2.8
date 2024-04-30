const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 1488;

const router = express.Router();

router.post('/pull-request', (req, res) => {
    const { title, description, author, repository } = req.body;
    res.status(201).json({ message: '--успішно!' });
});

app.use(bodyParser.json());
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Сервер працює за адресою http://localhost:${PORT}`);
});
