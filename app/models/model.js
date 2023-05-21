const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const dataDiri = sequelize.define("dataDiri", {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tempatLahir: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tanggalLahir: {
    type: DataTypes.DATEONLY,
  },
  alamat: {
    type: DataTypes.STRING,
  },
});

// dataDiri.sync();

module.exports = dataDiri;
