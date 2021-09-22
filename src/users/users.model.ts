import {model, Schema} from "mongoose";

export const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    startedAt: {
      type: Date,
    },
    birth: {
      type: Date,
    },
  },
  {versionKey: false}
);

export const UserModel = model<any>("Users", userSchema);
