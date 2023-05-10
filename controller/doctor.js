import doctors from '../models/doctors.js'

export const create =async (req,res) => {
   res.render('doctors/create')
};

export const store = async (req,res) => {
    console.log(req.body)
    const {name , id}=req.body
    await doctors.create({
        name,
        id
    })
    res.redirect('/adminstrator/cruds')
};