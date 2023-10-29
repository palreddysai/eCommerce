import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  //registerApi Url
  registerApiurl='http://localhost:3000/register'; 

  //method to post registered user data
  RegisterUser(inputdata:any)
  {
    return this.http.post(this.registerApiurl,inputdata)
  }
}
