import { Router } from "express";
import { create, show, store } from "../controller/department.js";

const router = new Router();

router.get('/create',create)

router.post('/', store)
/*
router.get('/delete',(req,res) => {
    res.render('subjects/delete')
})*/

router.get('/show/:_id',show)
export default router;