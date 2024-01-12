/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';

@Injectable()
export class ProfilesService {
  constructor(private readonly httpService: HttpService) {}

  getProfileUserDefault(): Observable<AxiosResponse<any>> {
    try {
      const githubAPI = `https://api.github.com/users/itsrusty`;
      console.log('success');
      return this.httpService
        .get(githubAPI)
        .pipe(map((response) => response.data));
    } catch (error) {
      console.error(error);
    }
  }

  searchUserInGithub(username: string) {
    const dataUser = { username: username };
    const searchUser = `https://api.github.com/users/${dataUser.username}`;

    return this.httpService
      .get(searchUser)
      .pipe(map((response) => response.data));
  }
}