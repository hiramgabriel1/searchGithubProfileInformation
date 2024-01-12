/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
// import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
    // constructor()

    @Get()
    async getProfilesGithub(){
        return 'get profiles'
    }
}
