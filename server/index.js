import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config();

const app = express();
const port = 8200;
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
    res.send('Hello Elissa!')
})

const startServer = async () => {    
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(port, () => console.log(`Server started on port http://localhost:${port}`))
    } catch (error) {
        console.log(err.message);        
    }
}

startServer();