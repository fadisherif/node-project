import departments from "../models/departments.js";
import subjects from "../models/subjects.js"
import doctors from "../models/doctors.js";


export const create =async (req,res) => {
    const department =await departments.find().lean();
    const doctor =await doctors.find().lean();
    res.render('subjects/create',{ department , doctor})
};

export const store = async (req,res) => {
    const {name , code , department , doctor} = req.body
    await subjects.create({
        name,
        code,
        department,
        doctor
    })
    console.log(doctor.name)
    res.redirect('/adminstrator/cruds')
};

export const show= async (req,res) => {
    const {_id} = req.params;
    console.log(_id);
    const solosub = await subjects.findById(_id).lean();
    const department = await departments.find().lean();
    const doctor = await doctors.find().lean();
    console.log(solosub)
    res.render('subjects/update',{doctor , department , solosub})
};

export const update= async (req,res) =>{
    
    const { name , code , department , doctor} = req.body
    const {_id} = req.params;
    await subjects.findByIdAndUpdate(_id , {$set: {name , code , department , doctor}}).lean();
    res.redirect('/adminstrator/cruds', {department , })
};

export const deleteone=async(req,res) =>{
    const{_id}=req.params
    await subjects.findByIdAndDelete(_id),lean();
    res.redirect('/adminstrator/cruds')
}