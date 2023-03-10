const router = require("express").Router();
const FarmerController = require("../controllers/f_controller");
const isAdmin = require("../middlewares/isAdmin");
const isLoggedIn = require("../middlewares/isLoggedIn");

const farmerController = new FarmerController();

router.post("/register", farmerController.register);
router.get("/update",isLoggedIn,isAdmin,farmerController.updatefarmerByname);
router.get("/fetch",farmerController.getfarmer);
router.get("/name",farmerController.getfarmerByname);
router.delete("/:id",isLoggedIn, isAdmin,farmerController.deletefarmerByID);

router
    .route("/:id")
    .get(isLoggedIn, isAdmin, farmerController.getfarmerByname)
    .put(isLoggedIn, farmerController.updatefarmerByname)
    .delete(isLoggedIn, farmerController.deletefarmerByID);


module.exports = router;
