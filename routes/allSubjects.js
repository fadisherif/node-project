import { Router } from "express";
import subjects from '../models/departments.js';

const router = new Router();

router.get('/allSubjects',(req,res) => {
    res.render('subjects/allSubjects')
})

router.get('/create',(req,res) => {
    res.render('subjects/create')
})

router.get('/delete',(req,res) => {
    res.render('subjects/delete')
})

router.get('/update',(req,res) => {
    res.render('subjects/update')
})
export default router;