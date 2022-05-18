import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './Assignments/template-driven/template-driven.component';
import { HeaderComponent } from './header/header.component';
import { AppRouting } from './app-routing.module';

import { ReactiveComponent } from './Learning-Forms/reactive/reactive.component';
import { ReactiveFormsComponent } from './Assignments/reactive-forms/reactive-forms.component';
import { FormsComponent } from './Learning-Forms/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    HeaderComponent,
    FormsComponent,
    ReactiveComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
