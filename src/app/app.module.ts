import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RadioButtonModule } from 'primeng/radiobutton'
import { CheckboxModule } from 'primeng/checkbox'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RadioButtonModule,
    CheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
