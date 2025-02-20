import db from './../db/db.js';
import { DataTypes } from 'sequelize';

const User = db.sequelize.define('user', {
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
})

//add a function to hash passwords

//add a function to validate passwords

//make sure table is created
await User.sync({ alter: true });

export default User;