const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(session({secret: 'COokIE_MONSteratkLALA'}));

app.use('/api',require('./routes/index'));

async function start(){
    try{
        await mongoose.connect('mongodb://localhost:27017/thenmail');
        await app.listen(PORT, () => {
            console.log(`Serving at port: ${PORT}`);
        });
    } catch (error) {
        console.log("Error while launching: "+error);
    }
}

app.use((error, req, res, next) => {
    res.status(400).send({ message: error.message })
})

start();