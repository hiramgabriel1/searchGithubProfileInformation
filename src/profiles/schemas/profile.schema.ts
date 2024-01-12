import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
  username: String,
  // lengthRepositorys: Number,
});

export interface Profile extends mongoose.Document {
  username: string;
}
