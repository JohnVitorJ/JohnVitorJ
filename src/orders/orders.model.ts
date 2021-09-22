import {model, Schema} from "mongoose";

const ObjectId = Schema.Types.ObjectId;

export const ordersSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: "Users",
    },
    type: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
    amount: {
      type: Number,
    },
  },
  {versionKey: false}
);

export const OrdersModel = model<any>("Orders", ordersSchema);
