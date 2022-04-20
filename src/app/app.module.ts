import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { DeptActivitiesComponent } from './dept-activities/dept-activities.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CseComponent } from './cse/cse.component';
import { ItComponent } from './it/it.component';
import { EceComponent } from './ece/ece.component';
import { FirstyearComponent } from './firstyear/firstyear.component';
import { SecondyearComponent } from './secondyear/secondyear.component';
import { Cse1Component } from './cse1/cse1.component';
import { Firstyear1Component } from './firstyear1/firstyear1.component';
import { Secondyear1Component } from './secondyear1/secondyear1.component';
import { ChildComponent } from './child/child.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { JsComponent } from './js/js.component';
import { TsComponent } from './ts/ts.component';
import { BsComponent } from './bs/bs.component';
import {HttpClientModule} from '@angular/common/http';
import { Search1Pipe } from './search1.pipe';
import { Search2Pipe } from './search2.pipe';
import { Search3Pipe } from './search3.pipe'

@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
    StudentsComponent,
    DeptActivitiesComponent,
    PagenotfoundComponent,
    CseComponent,
    ItComponent,
    EceComponent,
    FirstyearComponent,
    SecondyearComponent,
    Cse1Component,
    Firstyear1Component,
    Secondyear1Component,
    ChildComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    TechnologiesComponent,
    JsComponent,
    TsComponent,
    BsComponent,
    Search1Pipe,
    Search2Pipe,
    Search3Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
