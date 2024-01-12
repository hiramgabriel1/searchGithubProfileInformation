/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
    constructor(private profileService: ProfilesService){}

    @Get()
    async getProfilesGithub(): Object {
        return this.profileService.getProfileUser();
    }
}
