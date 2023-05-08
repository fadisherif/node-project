import departments from '../models/departments.js';
import subjects from '../models/subjects.js';
import students from '../models/students.js';
import doctors from '../models/doctors.js';




import { Router } from "express";
const router=new Router();

router.get('/cruds', async (req,res) => {
    const department = await departments.find().lean();    
    const subject = await subjects.find().lean(); 
    const student = await students.find().lean();
    const doctor = await doctors.find().lean();
   
    res.render('adminstrator/cruds', {department , subject , student , doctor})
    console.log(doctor);
    
    
})


export default router;