import { Router } from "express";
import { create, deleteone, login, loginForm, store } from "../controller/doctor.js";

const router = new Router();

router.get('/create' , create)

router.post('/' , store)

router.get('/login', loginForm)
router.post('/login', login)

router.get('/delete',deleteone)

// router.get('/show/:_id',show)
export default router;