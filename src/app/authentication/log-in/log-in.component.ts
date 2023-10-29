import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit
{
  loginForm: FormGroup;
  constructor (private router:Router, private service:AuthService) {}

  ngOnInit()
  {
      this.loginForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      })
  }

  loginSubmit()
  {
    this.service.loginUser(this.loginForm).subscribe
    (res =>
      {
                 
      }
    )
    console.log(this.loginForm.value);
    this.router.navigate(['/home'])
    this.loginForm.reset();
  }
}
