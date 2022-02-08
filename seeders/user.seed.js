const db = require('../database/db');
const UserController = require('../controller/user.controller');

async function seedUser() {
    await db();
    const user = await UserController.createUser({ 
        firstName: 'Michael',
        lastName: 'Scott', 
        phone: '+888888', 
        password: 'alabalabalabab', 
        city: 'Penselvania'
    });

    console.log(user);
}

seedUser();