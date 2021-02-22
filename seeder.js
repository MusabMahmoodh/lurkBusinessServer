import User from "./models/userModel.js";
import bcrypt from "bcryptjs";

const seeder = async () => {
  const user = new User({
    name: "admin",
    email: "lurk.innovation@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  });
  await user.save();
};

export default seeder;
