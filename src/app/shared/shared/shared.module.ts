import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeTextDirective } from '../change-text.directive';



@NgModule({
  
  imports: [
  ],
  declarations: [
    ChangeTextDirective
  ],
  exports: [
    ChangeTextDirective,
  ]
})
export class SharedModule { }
