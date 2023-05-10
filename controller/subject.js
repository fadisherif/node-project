import departments from "../models/departments.js";
import subjects from "../models/subjects.js"


export const create =async (req,res) => {
    const department =await departments.find().lean();
    res.render('subjects/create',{ department })
};

export const store = async (req,res) => {
    const {name , code , department} = req.body

    await subjects.create({
        name,
        code,
        department

    })

    res.redirect('/adminstratior/cruds')
};