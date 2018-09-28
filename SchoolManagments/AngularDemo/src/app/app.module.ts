import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import {CustomMaterialModule} from './core/App.Material.module';
import {RoutingModules} from './core/App.routing.omdule';
import {FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { TeachersComponent } from './teachers/teachers.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { TeachersPipePipe } from '../filter/teachers-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    TeachersComponent,
    TeachersPipePipe
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    CustomMaterialModule,
    RoutingModules,
    FormsModule,
    HttpModule,HttpClientModule,ReactiveFormsModule

  ],
  exports:[FormsModule,HttpModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
