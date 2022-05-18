import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

import { ReactiveComponent } from "./Learning-Forms/reactive/reactive.component";
import { TemplateDrivenComponent } from "./Assignments/template-driven/template-driven.component";
import { FormsComponent } from "./Learning-Forms/forms/forms.component";
import { ReactiveFormsComponent } from "./Assignments/reactive-forms/reactive-forms.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/forms', pathMatch: 'full' },
    { path: 'forms', component: FormsComponent },
    { path: 'reactive', component: ReactiveComponent },
    { path: 'template-driven', component: TemplateDrivenComponent },
    {path: 'reactive-form', component:ReactiveFormsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouting {

}