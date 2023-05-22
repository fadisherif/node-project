import { admincruds } from '../controller/admin.js';

import { Router } from "express";
const router=new Router();

router.get('/cruds', admincruds)


export default router;