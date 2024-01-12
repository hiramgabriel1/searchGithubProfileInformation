/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { createProfile } from './dto/create-profile.dto';

@Controller()
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  @Get('profile/default')
  async getProfilesGithub(): Promise<unknown> {
    return this.profileService.getProfileUserDefault();
  }

  @Post('profile/search')
  async searchUser(@Body() post: createProfile){
     console.log(post);
     
     return this.profileService.searchUserInGithub(post.username)
  }
}