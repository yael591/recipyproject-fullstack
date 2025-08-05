import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserClass } from '../../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string="http://localhost:1234/users/"
  private username: string = '';
  
  constructor(private http:HttpClient) {
     
   }


  setUsername(name: string) {
    this.username = name;
  }

  getUsername(): string {
    return this.username;
  }

  clear() {
    this.username = '';
  }
  login(nameUser: string, passUser: string) {
    return this.http.post<UserClass>(`${this.url}getById`, { nameUser, passUser });
  }
  add(user: UserClass) {
    return this.http.post<boolean>(`${this.url}addUser`, user);
  }
  getAll():Observable<Array<any>>{
    return this.http.get<Array<any>>(`${this.url}getAllUsers`)
  }


}
