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
        username : new FormControl(null),
        // description : new FormControl(null),
        // email : new FormControl(null),
        // gender : new FormControl(null),
        password : new FormControl(null)
      })
  }
  onSubmit()
  {
    this.service.RegisterUser(this.signupForm.value).subscribe
    (
      result =>
      {
        console.log(result);        
      }
    )
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }
}
