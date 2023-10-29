import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit
{
signupForm: FormGroup;

  constructor (private service: AuthService, private router: Router)
  {

  }
  ngOnInit() 
  {
      this.signupForm = new FormGroup({
        firstName : new FormControl(null),
        lastName : new FormControl(null),
        email : new FormControl(null),
        password : new FormControl(null),        
        gender : new FormControl(null),
      })
  }
  onSubmit()
  {
    this.service.registerUser(this.signupForm.value).subscribe
    (
      result =>
      {
        console.log(result);        
      }
    )
    console.log(this.signupForm.value);
    alert("You have been successfully registered!" );
    this.router.navigate(['/login'])
    this.signupForm.reset();
  }
}
