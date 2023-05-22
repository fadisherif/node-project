import { Router } from "express";
import { create, show, store, update ,deleteone} from "../controller/department.js";

const router = new Router();

router.get('/create',create)
router.post('/', store)

router.delete('/:id', deleteone)

router.get('/show/:_id',show)
router.post("/:id",update)

export default router;