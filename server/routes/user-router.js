const userCtrl = require("../controllers/User-ctrl");
const userRouter = require("express").Router();

// acces to database model for old functions
userRouter.get("/all", userCtrl.getAllUsers);
// access single or multiple Users by contained characters(insennsitive to capitals letters)
userRouter.get("/:userName/:password", userCtrl.getUserByName);
// insert new user to Users collection
userRouter.post("/saveUser", userCtrl.saveNewUser);
// Delete User using _id
userRouter.delete("/User/:UserId", userCtrl.deleteUser);
//   update an existing User
userRouter.put("/User/:UserId", userCtrl.updateUser);


module.exports = userRouter;
