import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  userData = environment.usersData;

  /**
   *
   * @returns users
   */
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userData}/usersMockResponse.json`);
  }
}
