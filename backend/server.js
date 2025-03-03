import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import cloudinaryConfig from './config/cloudinary.js';

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
cloudinaryConfig();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints 
app.get('/', (req, res) => {
    res.status(200).send('API working');
});

app.listen(port, () => console.log(`Server is running on port: ` + port));