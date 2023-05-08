import { Router } from "express";

const router = new Router();
router.get('/allDepartmetns',(req,res) => {
    res.render('subjects/allDepartments')
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