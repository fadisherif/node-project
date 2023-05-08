import express from 'express'
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
import subjectsRouter from './routes/allSubjects.js'
const mongoConnectionUrl= 'mongodb://127.0.0.1:27017'
mongoose.connect(mongoConnectionUrl);
import adminRouter from './routes/admin.js'
const app = express();


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templets');
/*
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));*/

app.get('/',(req,res) =>{
    res.render('other/first');
})

app.use('/subjects',subjectsRouter);
app.use('/adminstrator',adminRouter);



app.listen(process.env.port, () => {
console.log(`started the app on http://localhost:${process.env.port}`);
})