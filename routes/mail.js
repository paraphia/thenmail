const router = require('express').Router();
const MailController = require('../controller/mail.controller');

router.post('/', async (req,res,next) => {
    try{
        const sender = req.session.user;
        const response = await MailController.createMail(sender,req.body);
        res.send(response);
    } catch (error) {
        next(error);
    }
});

router.get('/getCount', async (req, res) => {
    const response = await MailController.getCount(req.query);
    res.send(response);
})

router.get('/getMails', async (req, res) => {
    const response = await MailController.getMails(req.query);
    res.send(response);
})


router.get('/count', async (req, res) => {
    const mails = await MailController.mailsCount();
    res.send({data: mails});
})


module.exports = router;