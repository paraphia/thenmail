const bcrypt = require('bcrypt');
const { badRequest } = require('boom');
const boom = require('boom');

const  User = require('../models/User');

exports.userLogin = async (data) => {
    const { phone, password } = data;
    if ( !phone || !password ) throw boom.badRequest('Validation error');
    const user = await User.findOne({phone});
    if (!user) throw boom.unauthorized('Auth error');
    const passwordCorrect = await bcrypt.compare(password,user.password);
    console.log(passwordCorrect);
    if (!passwordCorrect) throw boom.unauthorized('Auth error');
    return user;
}

exports.createUser = async (data) => {
    const { username, firstName, lastName, phone, password, city } = data;

    if (!firstName || !lastName || !phone || !password || !city) throw boom.badRequest('Validation error');

    const userExist = await User.findOne({phone});
    if (userExist) throw boom.badRequest('User already exist');

    const hashPassword = bcrypt.hashSync(password, 7);
    console.log(hashPassword);
    const user = await User({
        username,
        firstName,
        lastName, 
        phone, 
        password: hashPassword, 
        city
    }).save();

    return user;
}

exports.changePassword = async (data) => {
    const { _id, password } = data;
    if (!_id || !password ) throw boom.badRequest('Validation error');
    const user = await User.findOne({ _id });
    const hashPassword = bcrypt.hashSync(password, 7);
    user.password = hashPassword;
    await user.save();
    return user;
}