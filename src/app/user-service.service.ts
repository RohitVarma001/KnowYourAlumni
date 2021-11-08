import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public http: HttpClient) { }

  user: any

  userRegistration(data: any) {
    return this.http.post<string>("http://localhost:3000/register", data);
  }

  userLogin(data: any) {
    return this.http.post<any[]>("http://localhost:3000/login", data);
  }

  editUserData(data: any) {

    return this.http.post<string>("http://localhost:3000/editUser", data);
  }

  userData(data: any) {
    return this.http.post<any[]>("http://localhost:3000/getUser", data);
  }

  isLoggedIn() {
    return !!localStorage.getItem("loggeduser");
  }

  isAdmin(id: number) {
    return this.http.get<boolean>("http://localhost:3000/isAdmin/" + id);
  }
}
