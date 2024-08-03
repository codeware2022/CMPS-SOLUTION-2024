import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestNewComponent } from './test-new/test-new.component';
import { TestOneComponent } from './test-one/test-one.component';


@NgModule({
  declarations: [
    TestNewComponent,
    TestOneComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
