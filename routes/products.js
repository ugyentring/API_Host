const express= require("express");
const router = express.Router();

// importing the controller
// done after definig it in controller
const {
    getAllProducts,
    getAllProductsTesting
}= require ("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;


