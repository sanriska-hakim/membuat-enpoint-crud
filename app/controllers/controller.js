const dataDiri = require("../models/model");

// mendapatkan semua data
exports.getAlldataDiri = (req, res) => {
  dataDiri
    .findAll()
    .then((dataDiri) => res.json(dataDiri))
    .catch((err) => res.status(500).json({ error: err.message }));
};

// mendapatkan data berdarkan ID
exports.getDataDiriById = (req, res) => {
  const dataId = req.params.id;
  dataDiri
    .findByPk(dataId)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "data tidak ditemukan" });
      }
      res.json(data);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

// menambahkan data baru
exports.createDataDiriBaru = (req, res) => {
  const { nama, tempatLahir, tanggalLahir, alamat } = req.body;
  dataDiri
    .create({ nama, tempatLahir, tanggalLahir, alamat })
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
};

// mengupdate data berdsarkan ID
exports.updateDataDiri = (req, res) => {
  const dataId = req.params.id;
  const { nama, tempatLahir, tanggalLahir, alamat } = req.body;
  dataDiri
    .findByPk(dataId)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "data tidak ditemukan" });
      }
      data.nama = nama;
      data.tempatLahir = tempatLahir;
      data.tanggalLahir = tanggalLahir;
      data.alamat = alamat;
      return data.save();
    })
    .then((update) => res.json(update))
    .catch((err) => res.status(500).json({ error: err.message }));
};

// menghapus data berdasarkan ID
exports.deleteDataDiri = (req, res) => {
  const dataId = req.params.id;
  dataDiri
    .findByPk(dataId)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "data tidak ditemukan" });
      }
      return data.destroy();
    })
    .then(() => res.json({ message: "data berhasil dihapus" }))
    .catch((err) => res.status(500).json({ error: err.message }));
};
