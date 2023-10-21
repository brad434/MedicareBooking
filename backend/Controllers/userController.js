import User from "../models/UserSchema.js";

// ============= UPDATE USER =====================
export const updateUser = async (req, res) => {
  //the mongoDB database has each user id associate with their email
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update." });
  }
};

// =================== DELETE USER ============================
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete." });
  }
};

// ================= GET A(ONE) USER ========================
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({
      success: true,
      message: "User found",
      data: user,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "No user found" });
  }
};

// ====================== GET ALL USERS ==========================
export const getAllUser = async (req, res) => {
  try {
    //pay attention , it is called users not user. Because we are getting all of the users.
    const users = await User.find({}).select("-password"); //the .select("-password") will exclude the password when you go to the end point of getAllUsers

    res.status(200).json({
      success: true,
      message: "Users found",
      data: users,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};
