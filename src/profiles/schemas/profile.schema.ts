import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
  username: String,
  lengthRepositorys: Number,
});
