import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RadioButtonModule } from 'primeng/radiobutton'
import { CheckboxModule } from 'primeng/checkbox'
import { FormsModule } from '@angular/forms';
import { HeaderModule } from './components/header';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RadioButtonModule,
    CheckboxModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
