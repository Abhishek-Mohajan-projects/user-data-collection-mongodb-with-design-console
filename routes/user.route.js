const { getUsers, getOneUser, createUser, updateUser, deleteUser } = require("../controllers/user.controller");
const multer  = require('multer')

const router = require("express").Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + file.originalname
      cb(null, name)
    }
});
  
const upload = multer({ storage: storage })

router.get("/", getUsers);
router.get("/:id", getOneUser);

router.post("/", upload.single("image"), createUser);
router.patch("/:id", upload.single("image"), updateUser);
router.delete("/:id", deleteUser);

module.exports = router;