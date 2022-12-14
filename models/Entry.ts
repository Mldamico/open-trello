import mongoose, { Model, Schema } from "mongoose";
import { Entry } from "../interfaces";

export interface IEntry extends Entry {}

const entrySchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Number },
  status: {
    type: String,
    enum: {
      values: ["Pending", "In Progress", "Finished"],
      message: "{VALUE} is not a valid status",
    },
    default: "Pending",
  },
});

const EntryModel: Model<Entry> =
  mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default EntryModel;
