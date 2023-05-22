import departments from "../models/departments.js"

export const create = (req,res) => {

    res.render('departments/create')
}

export const store = async (req,res) => {
    console.log(req.body)
    const {name , code} = req.body
    await departments.create({
        name,
        code
    });
    res.redirect('/adminstrator/cruds')
}
export const show= async (req,res) => {
    const {_id} = req.params;
    console.log(_id);
    const solodep = await departments.findById(_id).lean();
    console.log(solodep);
    res.render('departments/update' , {solodep})
}

export const update= async (req,res) =>{
    const { name , code } = req.body
    const {_id} = req.params;
    await departments.findByIdAndUpdate(_id , {$set:{name , code}});
    res.redirect('/adminstrator/cruds')
    //console.log(department)

}

export const deleteone=async (req,res) =>{
    const {_id}=req.params
    await departments.findByIdAndDelete(_id)
    return res.redirect('/adminstrator/cruds')   
}