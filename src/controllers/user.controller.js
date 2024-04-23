import { response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user detail from frontend
  //validation -not empty
  //check if user is already exists:username, email
  //check for images, check fot avatar
  //upload them to cloudinary, avatar
  //create user object - create entry in db
  //remove password and referesh token field  from response
  //check for user creation
  //return res

  const { fullName, email, username, password } = req.body;
  console.log("email:", email);

  //normal way
  // if (fullName === "") {
  //   throw new ApiError(400, "fullname is required");
  // }
  //more advance way
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "ALL fields are required");
  }

  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  // res.status(200).json({
  //   message: "ok",
  // });
});

export { registerUser };
