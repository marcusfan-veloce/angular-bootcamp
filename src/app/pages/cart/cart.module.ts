import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CartComponent } from './cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RadioButtonModule } from 'primeng/radiobutton'
import { CheckboxModule } from 'primeng/checkbox'
import { FormsModule } from '@angular/forms';
import { DividerModule } from "primeng/divider";

@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RadioButtonModule,
    CheckboxModule,
    DividerModule
],
})
export class CartModule { }
