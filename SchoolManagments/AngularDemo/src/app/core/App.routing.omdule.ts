import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "../login/login.component";
import { AdminComponent } from "../admin/admin.component";
import { TeachersComponent } from "../teachers/teachers.component";

const routs:Routes=[
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'teachers', component: TeachersComponent },
    {path : '', component : LoginComponent}
  ];

@NgModule({
        imports:[RouterModule.forRoot(routs)],
        exports:[RouterModule],
        declarations: []
})

export class RoutingModules{}
