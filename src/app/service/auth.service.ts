import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  apiUrl = 'http://localhost:3000';
  
  //registerApi Url
  registerApiurl= this.apiUrl + '/register';
  loginApiurl = this.apiUrl + '/login'; 

  //method to post registered user data

  registerUser(inputdata:any)
  {
    return this.http.post(this.registerApiurl,inputdata)
  }

  loginUser(data:any)
  {
    return this.http.post(this.loginApiurl, data)
  }
}
