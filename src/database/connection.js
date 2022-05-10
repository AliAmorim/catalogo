import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize('postgres://admin:0Jh7ebKhbhi2Oi7NgNvu96OCJToXCdhm@dpg-c9sru46hb05u5q4ro1h0-a.oregon-postgres.render.com/db_pobreflix', {
  dialect: "postgres",
  dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

