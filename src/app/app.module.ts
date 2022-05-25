import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './Forms-Start/Assignments/template-driven/template-driven.component';
import { HeaderComponent } from './header/header.component';
import { AppRouting } from './app-routing.module';

import { ReactiveComponent } from './Forms-Start/Learning-Forms/reactive/reactive.component';
import { ReactiveFormsComponent } from './Forms-Start/Assignments/reactive-forms/reactive-forms.component';
import { FormsComponent } from './Forms-Start/Learning-Forms/forms/forms.component';
import { PipeComponent } from './pipes/pipe.component';
import { PipePipe } from 'src/assets/custom-pipes/pipe.pipe';
import { Sorting } from 'src/assets/custom-pipes/sorting.pipe';
import { ShortenPipe } from 'src/assets/custom-pipes/shorten.pipe';
import { Reverse } from 'src/assets/custom-pipes/reversed.pipe.pipe';
import { HttpComponent } from './HttpRequests/http/http.component';
import { LoggingInterceptor } from 'src/assets/Services and Interceptors/logging.interceptor';
import { AuthInterceptor } from 'src/assets/Services and Interceptors/Auth.interceptor';

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
    Reverse,
    HttpComponent

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouting,
    ReactiveFormsModule,
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: LoggingInterceptor }],
  bootstrap: [AppComponent]
})
export class AppModule { }
