const Sequelize = require("sequelize")

export const connection = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = connection;