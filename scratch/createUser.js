import User from './../model/user.js';

const user = await User.create({
    username: "jarcher",
    password: "password123?!",
    role: "user"
})

console.log(user);