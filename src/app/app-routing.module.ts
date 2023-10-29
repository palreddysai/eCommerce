import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { HomeComponent } from './UI/home/home.component';

const routes: Routes = 
[
  {path:'login', component:LogInComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'home', component:HomeComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
