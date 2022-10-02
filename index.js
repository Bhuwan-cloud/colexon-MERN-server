import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import postsRoutes from './routes/posts.js'

const app = express();

//  specifying routes 
app.use('/posts', postsRoutes);

//  setting body parser to properly send our request 
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//  without cors we cant share resources across different origins 
app.use(cors());

//  some important variables
const CONNECTION_URL = "mongodb+srv://Bhuwan1522:152207@cluster0.ukahrah.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true,})
.then(() => app.listen(PORT, () => console.log(`Server is Running in port: ${PORT} and MongoDb Atlas is connected`)))
.catch((error) => console.log(error.message));

