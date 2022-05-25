import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

import { ReactiveComponent } from "./Forms-Start/Learning-Forms/reactive/reactive.component";
import { TemplateDrivenComponent } from "./Forms-Start/Assignments/template-driven/template-driven.component";
import { FormsComponent } from "./Forms-Start/Learning-Forms/forms/forms.component";
import { ReactiveFormsComponent } from "./Forms-Start/Assignments/reactive-forms/reactive-forms.component";
import { PipeComponent } from "./pipes/pipe.component";
import { HttpComponent } from "./HttpRequests/http/http.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/forms', pathMatch: 'full' },
    { path: 'forms', component: FormsComponent },
    { path: 'reactive', component: ReactiveComponent },
    { path: 'reactive/:id/:name', component: ReactiveComponent },
    { path: 'template-driven', component: TemplateDrivenComponent },
    { path: 'reactive-form', component: ReactiveFormsComponent },
    { path: 'pipes', component: PipeComponent },
    { path: 'http', component: HttpComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouting {

}