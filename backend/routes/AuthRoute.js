const { Signup,login,getuser, logout } = require("../controller/AuthController");
const { verifyToken } = require("../middlewares/verifyToken");
// const { UserVerification } = require("../middlewares/UserVerification");
const router = require("express").Router();


router.post("/signup", Signup);
router.post('/login', login);
router.get("/getuser",verifyToken, getuser);
router.get("/logout", logout);

module.exports = router;