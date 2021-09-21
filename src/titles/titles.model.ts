import {model, Schema} from "mongoose";

const ObjectId = Schema.Types.ObjectId;

export const titlesSchema = new Schema({
  user: {
    type: ObjectId,
    ref: "Users",
  },
  label: {
    type: String,
  },
  expiresAt: {
    type: Date,
  },
  amount: {
    type: Number,
  }
});

export const TitlesModel = model<any>("Titles", titlesSchema);
