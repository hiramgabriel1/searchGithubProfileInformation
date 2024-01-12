// profile.model.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Profile, ProfileSchema } from './profile.schema';
import { Profile, ProfileSchema } from './schemas/profile.schema';

@Injectable()
export class ProfileModel {
  constructor(@InjectModel('Profile') private readonly profileModel: Model<Profile>) {}
}
