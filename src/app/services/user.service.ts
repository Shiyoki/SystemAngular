import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl: string = 'https://jsonplaceholder.typicode.com/'
  constructor(private http: HttpClient) { }

  listUsers(){
    return this.http.get(this.baseUrl + 'users');
  }

  viewuser(id: string){
    return this.http.get(this.baseUrl + 'users/' + id);
  }

  addUser(userObj: any){
    return this.http.post(this.baseUrl + 'users', userObj);
  }

  deleteUser(id: any){
    return this.http.delete(this.baseUrl + 'users/' + id)
  }
  
}
