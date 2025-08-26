"use server";

import { DBConnection } from "../utils/config/db";
import UserModel from "../utils/models/User";

export const registrationServerAction = async (RegestrationDetails) => {
  console.log(RegestrationDetails);
  await DBConnection();
  await UserModel.create(RegestrationDetails)
  return { success: true };
};
