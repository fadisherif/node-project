import doctors from '../models/doctors.js'
import departments from '../models/departments.js';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import Jwt from 'jsonwebtoken';
import subjects from '../models/subjects.js';

export const create = async (req, res) => {
    const department = await departments.find().lean()
    res.render('doctors/create', { department })
};

export const store = async (req, res) => {
    const { name, email, password, department } = req.body
    await doctors.create({
        name,
        email,
        password,
        department
    })
    res.redirect('/adminstrator/cruds')
};

export const deleteone = async (req, res) => {
    const { _id } = req.params
    await doctors.findByIdAndDelete(_id)
    return res.redirect('/adminstrator/cruds')
}


export const loginForm = (req, res) => {
    res.render('doctors/login');
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const doc = await doctors.findOne({ email })

    if (password != doc.password) {
        res.send("Incorrect Password");
        res.redirect('/doctors/login')
    }
    res.send("logen")
    const data = {
        _id: doc._id,
        email: doc.email
    };

    const jwtToken = Jwt.sign(data, process.env.JWT_SECRET);
    res.cookie('token', jwtToken);

    console.log(jwtToken);
}

export const viewSubjects = async (req, res) => {
    const sub = await subjects.find({doctor:jwtToken._id}).lean()
    res.render('dcotors/viewSub', { sub })
}