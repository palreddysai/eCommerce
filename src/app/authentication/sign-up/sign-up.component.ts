import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit
{
signupForm: FormGroup;

  ngOnInit() 
  {
      this.signupForm = new FormGroup({
        firstName : new FormControl(null),
        lastName : new FormControl(null),
        email : new FormControl(null),
        gender : new FormControl(null),
        password : new FormControl(null)
      })
  }
  onSubmit()
  {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }
}
