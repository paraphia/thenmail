const router = require('express').Router();
const boom = require('boom');
const UserController = require('../controller/user.controller');

router.post('/login', async (req, res, next) => {
    try{
        const user = await UserController.userLogin(req.body);
        req.session.user = user;
        res.send({message: 'ok'});
    } catch (error) {
        next(error);
    }
});

router.post('/logout', (req,res) => {
    req.session.destroy();
    res.send({message: "ok"});
})

router.get('/dashboard', async (req, res, next) => {
    try{
        const { user } = req.session;
        console.log(user);
        if(!user) throw boom.unauthorized('Auth error');
        res.send(user);
    } catch (error) {
        next(error);
    }
});

module.exports = router;