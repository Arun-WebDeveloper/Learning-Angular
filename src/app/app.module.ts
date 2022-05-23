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
import { PipeComponent } from './pipes/pipe.component';
import { PipePipe } from './custom-pipes/pipe.pipe';
import { Sorting } from './custom-pipes/sorting.pipe';
import { ShortenPipe } from './custom-pipes/shorten.pipe';
import { Reverse } from './custom-pipes/reversed.pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    HeaderComponent,
    FormsComponent,
    ReactiveComponent,
    ReactiveFormsComponent,
    PipeComponent,
    PipePipe,
    Sorting,
    ShortenPipe,
    Reverse

    
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
