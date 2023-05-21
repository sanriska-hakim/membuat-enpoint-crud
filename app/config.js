const { Sequelize } = require("sequelize");

// Konfigurasi koneksi ke database
const sequelize = new Sequelize("user_database", "root", "", {
  host: "localhost",
  dialect: "mariadb",
});

// Menguji koneksi ke database
sequelize
  .authenticate()
  .then(() => {
    const smiley = "😊";
    console.log(`
    ░██████╗░█████╗░███╗░░██╗██████╗░██╗░██████╗
    ██╔════╝██╔══██╗████╗░██║██╔══██╗██║██╔════╝
    ╚█████╗░███████║██╔██╗██║██████╔╝██║╚█████╗░
    ░╚═══██╗██╔══██║██║╚████║██╔══██╗██║░╚═══██╗
    ██████╔╝██║░░██║██║░╚███║██║░░██║██║██████╔╝
    ╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝╚═╝╚═════╝░
    `);
    console.log(smiley, "alhamdulillah terhubung ke database...");
  })
  .catch((err) => {
    console.error("Tidak dapat terhubung ke database:", err);
  });

module.exports = sequelize;
