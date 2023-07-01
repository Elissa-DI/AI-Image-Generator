import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const app = express();
const port = 8200;
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
    res.send('Hello Elissa!')
})

app.listen(port, () => {
    console.log(`Server started on port htt://localhost:${port}`);
})