const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/data", controller.getAlldataDiri);
router.get("/data/:id", controller.getDataDiriById);
router.post("/data", controller.createDataDiriBaru);
router.put("/data/:id", controller.updateDataDiri);
router.delete("/data/:id", controller.deleteDataDiri);

module.exports = router;
