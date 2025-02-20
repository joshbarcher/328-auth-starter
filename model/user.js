import sequelize from './../db/db.js';
import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

const User = sequelize.define('user', 
{
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user'
    }
}, {
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                await hashPassword(user);
            }
        },
        beforeUpdate: async (user) => {
            if (user.changed("password")) {
                await hashPassword(user);
            }
        }
    }
})

//add a function to hash passwords
async function hashPassword(user) {
    //the higher the number, the more secure
    const salt = await bcrypt.genSalt(10); 
    console.log(`Salt used: ${salt}`);
    user.password = await bcrypt.hash(user.password, salt);
}

//add a (static) function to validate passwords
User.validatePassword = async (plainPass, storedPass) => {
    return await bcrypt.compare(plainPass, storedPass);
}

//make sure table is created
await User.sync({ alter: true });

export default User;