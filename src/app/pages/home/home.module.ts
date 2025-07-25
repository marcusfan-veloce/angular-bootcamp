import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RadioButtonModule } from 'primeng/radiobutton'
import { CheckboxModule } from 'primeng/checkbox'
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar'
import { DividerModule } from 'primeng/divider'

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RadioButtonModule,
    CheckboxModule,
    SidebarModule,
    DividerModule
  ],
})
export class HomeModule { }
