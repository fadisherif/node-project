import { Router } from "express";
import { create, show, store, update ,deleteone} from "../controller/subject.js";

const router = new Router();


router.get('/create',create)
router.post('/',store)



router.get('/show/:_id',show)
router.put("/",update)
router.delete("/deleteone/:id",deleteone);
export default router;