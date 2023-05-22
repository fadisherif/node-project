import doctors from '../models/doctors.js'
import departments from '../models/departments.js';

export const create =async (req,res) => {
    const department = await departments.find().lean()
   res.render('doctors/create' , {department})
};

export const store = async (req,res) => {
    const {name , email , password , department }=req.body
    await doctors.create({
        name,
        email,
        password,
        department
    })
    console.log(department)
    res.redirect('/adminstrator/cruds')
};

export const deleteone=async (req,res) =>{
    const {_id}=req.params
    await doctors.findByIdAndDelete(_id)
    return res.redirect('/adminstrator/cruds')   
}