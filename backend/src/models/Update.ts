// src/models/Update.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IUpdate extends Document {
  userId: mongoose.Types.ObjectId;
  projectId: mongoose.Types.ObjectId;
  yesterday: string;
  today: string;
  blockers?: string;
  date: Date;
  
}

const updateSchema: Schema<IUpdate> = new Schema(
  { 
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true
    },
    yesterday: {
      type: String,
      required: true
    },
    today: {
      type: String,
      required: true
    },
    blockers: {
      type: String,
      default: ""
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export default mongoose.model<IUpdate>("Update", updateSchema);