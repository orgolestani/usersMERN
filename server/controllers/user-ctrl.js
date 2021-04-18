const userModel = require("../models/user-model");
// full movie obecjt list

async function getAllUsers(req, res) {
  await userModel.find((err, users) => {
    err && res.status(400).json({ success: false, error: err });
    res.status(200).json({ success: true, data: users });
  });
}
// get users by characters in user name
async function getUserByName(req, res) {
  let usersNameParam = req.params.userName;
  let usersPasswordParam = req.params.password;
  await userModel.find(
    { userName: usersNameParam, password: usersPasswordParam },
    (err, userData) => {
      err && res.status(400).json({ success: false, error: err });
      res.status(200).json({ success: true, data: userData });
    }
  );
}
// insert new user to users collection
async function saveNewUser(req, res) {
  let newUser = req.body.user;
  await userModel.insertMany(newUser, (err) => {
    if (err) throw err;
    console.log("user added:", JSON.stringify(newUser));
    res.status(200).json({ success: true, data: newUser });
  });
}
// Delete user using _id
async function deleteUser(req, res) {
  let userToDelete = req.params.userId;
  await userModel.findByIdAndDelete(userToDelete, (err, doc) => {
    err && res.status(400).json({ success: false, error: err });
    doc === null &&
      res.status(400).json({ success: false, error: "not found" });
  });
}
//   update an existing user
async function updateUser(req, res) {
  let userToUpdate = req.params.userId;
  let newuserInfo = req.body.movie;
  await userModel.findByIdAndUpdate(
    userToUpdate,
    newUserInfo,
    (err, doc) => {
      if (err) throw err;
      console.log("User info updated successfully:", doc);
      res.status(200).json({
        success: true,
        data: doc,
        message: "user updated successfully",
      });
    }
  );
}

module.exports = {
  getAllUsers,
  getUserByName,
  saveNewUser,
  deleteUser,
  updateUser,
};
