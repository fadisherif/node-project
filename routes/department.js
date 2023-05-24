import { Router } from "express";
import { create, deleteone, show, store, update } from "../controller/department.js";

const router = new Router();

router.get('/create',create)
router.post('/', store)

router.delete('/:id', deleteone)

router.get('/:_id',show)
router.post("/:id",update)

export default router;