const express = require("express");
const router = express.Router();
import AuthCtrl from "../controllers/AuthController";
const { protect } = require("../middleware/auth");

router.route("/users").get(protect, AuthCtrl.getAllUsers);

router.route("/signup").post(AuthCtrl.signup);

router.route("/signin").post(AuthCtrl.signin);

router.route("/forgotpassword").post(protect, AuthCtrl.forgotpassword);

router.route("/resetpassword/:resetToken").put(protect, AuthCtrl.resetpassword);

export default router;
