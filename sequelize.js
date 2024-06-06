import { DataTypes, Sequelize } from "sequelize";
import { config as configDotenv } from 'dotenv';

configDotenv();

const sequelize = new Sequelize(`${process.env.DB_OYA_NAME}`, `${process.env.DB_OYA_USER}`, `${process.env.DB_OYA_PASSWORD}`, {
    host: `${process.env.DB_OYA_HOST}`,
    dialect: 'mariadb'
});

export { DataTypes, sequelize };
