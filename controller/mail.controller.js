const Mail = require('../models/Mail');
const { badRequest } = require('boom');

exports.createMail = async (sender,data) => {
    const { name, city, receiverAddress, receiverCity, deliverDate, receiverPhone, deliveryReport, agreement } = data;
    if(!sender) throw badRequest('Validation error');
    const senderId = sender._id;
    const mail = new Mail({
        senderId,
        name,
        city,
        receiverAddress,
        receiverCity,
        deliverDate,
        receiverPhone,
        deliveryReport,
        agreement
    });
    await mail.save();
    return { data: mail };
}

exports.getCount = async (data) => {
    const { status, city }  = data;
    const query = {};
    if (status) query.status = status;
    if (city) query.receiverCity = city;
    const mailsCount = await Mail.count(query);
    return {data: mailsCount};
}

exports.getMails = async (data) => {
    const { status, city }  = data;
    const query = {};
    if (status) query.status = status;
    if (city) query.receiverCity = city;
    const mails = await Mail.find(query);
    return {data: mails};
}


exports.mailsCount = async () => {
    const mails = await Mail.count();
    return mails;
}
