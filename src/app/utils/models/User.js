const { default: mongoose } = require("mongoose");

const UserScheema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.models.user || mongoose.model("user", UserScheema);
export default UserModel;
