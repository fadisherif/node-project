import students from '../models/students.js'
import departments from '../models/departments.js';

export const create =async (req,res) => {
    const department = await departments.find().lean()
   res.render('students/create' , {department})
};

export const store = async (req,res) => {
    const {name , email , password , department , academicNum}=req.body
    await students.create({
        name,
        email,
        password,
        department,
        academicNum
    })
    console.log(department)
    res.redirect('/adminstrator/cruds')
};

export const deleteone=async (req,res) =>{
    const {_id}=req.params
    await students.findByIdAndDelete(_id)
    return res.redirect('/adminstrator/cruds')   
}