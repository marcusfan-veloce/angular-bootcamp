import { NgModule } from '@angular/core';
import { Header } from './header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    Header
  ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    Header
  ]
})
export class HeaderModule { }
