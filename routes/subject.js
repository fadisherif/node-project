import { Router } from "express";
import subjects from '../models/departments.js';
import { create, store } from "../controller/subject.js";

const router = new Router();


router.get('/create',create)
router.post('/',store)

router.get('/delete',(req,res) => {
    res.render('subjects/delete')
})

router.get('/update',(req,res) => {
    res.render('subjects/update')
})
export default router;