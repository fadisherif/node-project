import { Router } from "express";
import { create, store } from "../controller/doctor.js";

const router = new Router();

router.get('/create' , create)

router.post('/' , store)
/*
router.get('/delete',(req,res) => {
    res.render('doctor/delete')
})

router.get('/show/:_id',show)*/
export default router;