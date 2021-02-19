import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './components/demo/demo.component';

import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule {

}
