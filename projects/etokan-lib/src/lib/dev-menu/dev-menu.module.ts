import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevMenuComponent } from './dev-menu.component';


@NgModule({
  declarations: [
    DevMenuComponent
  ],
  imports: [
    CommonModule,
    DevMenuComponent
  ],
  exports:[
    DevMenuComponent
  ]
})
export class DevMenuModule { }
