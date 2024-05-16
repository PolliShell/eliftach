// auth.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { HttpError, ctrlWrapper } = require("../helpers");
const { nanoid } = require("nanoid");
const { SECRET_KEY } = process.env;

// const register = async (req, res) => {
//     const { full_name, email,birth_date, password } = req.body;
//     const user = await User.findOne({ email });
//
//     if (user) {
//         throw HttpError(409, "Email already in use");
//     }
//
//     const verificationToken = nanoid();
//     const hashPassword = await bcrypt.hash(password, 10);
//
//     const newUser = await User.create({ full_name, email,birth_date, passhash: hashPassword, verificationToken });
//
//     // Sending email verification code can be added here
//
//     res.status(201).json({
//         full_name,
//         email,
//         verificationToken
//     });
// };

const register = async (req, res) => {
    const { full_name, email, birth_date, password } = req.body; // Заменяем "name" на "full_name"
    const user = await User.findOne({ email });

    if (user) {
        throw HttpError(409, "Email already in use");
    }

    const verificationToken = nanoid();
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ full_name, email, password: hashPassword, birth_date, verificationToken }); // Заменяем "name" на "full_name"

    const mail = {
        to: email,
        subject: "Подтверждение email",
        html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Подтвердить email</a>`
    };

    res.status(201).json({
        full_name, // Заменяем "name" на "full_name"
        email,
        birth_date,
        verificationToken
    });
};


const login = async (req, res) => {
    const {email, password} = req.body;

    console.log(req.body)
    const user = await User.findOne({email});




    if (!user) {
        throw HttpError(401, "Email or password invalid");
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw HttpError(401, "Email or password invalid");
    }

    const payload = {
        id: user._id,
    }

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
    await User.findByIdAndUpdate(user._id, {token});



    res.json({
        token,
    })
}

const getCurrent = async (req, res) => {
    const { email, full_name } = req.user;

    res.json({
        email,
        full_name,
    });
};

const logout = async (req, res) => {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: "" });

    res.json({
        message: "Logout success"
    });
};

const updateAvatar = async (req, res) => {
    // Your avatar update logic here
};

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    getCurrent: ctrlWrapper(getCurrent),
    logout: ctrlWrapper(logout),
    updateAvatar: ctrlWrapper(updateAvatar)
};
