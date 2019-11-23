require('dotenv').config(); 

module.exports = {
  "dev": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "port": process.env.DATABASE_PORT,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "port": process.env.DATABASE_PORT,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
