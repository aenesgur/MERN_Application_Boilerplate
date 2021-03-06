import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/postRoutes.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
//const CONNECTION_URL = 'mongodb://localhost:27017/MERNMeoriesDB';

app.get('/', (req, res)=>{
    res.send('Hello to Backend of my first MERN application');
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        }))
        .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);        