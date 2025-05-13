import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import chalk from 'chalk';

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT } = process.env;

const sequelize = new Sequelize(
    DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    logging: query => console.log(chalk.blue(`SQL Query: ${query}`))
});

try {
    await sequelize.authenticate();
    console.log('Connected successfully.');
} catch (error) {
    console.error('Unable to connect:', error);
}

export default sequelize;