import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    
  ],

  exports: [
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule
  ]

})
export class MaterialModule { }
