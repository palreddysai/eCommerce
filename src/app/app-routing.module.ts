import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { HomeComponent } from './UI/home/home.component';
import { MainComponent } from './UI/main/main.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = 
[
  
  
  {path:'main', component:MainComponent,children:[
    {path:'home', component:HomeComponent},
    {path:'men', component:MenComponent},
    {path:'women', component:WomenComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'login', component:LogInComponent},
    {path:'login/sign-up', component:SignUpComponent}
  ]},
  {path: '', redirectTo: '/main/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
