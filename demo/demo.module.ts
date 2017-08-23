import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BizSmartAngularTableModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, BizSmartAngularTableModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
