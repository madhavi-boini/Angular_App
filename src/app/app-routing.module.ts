import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsComponent } from './bs/bs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CseComponent } from './cse/cse.component';
import { Cse1Component } from './cse1/cse1.component';
import { DeptActivitiesComponent } from './dept-activities/dept-activities.component';
import { EceComponent } from './ece/ece.component';
import { FirstyearComponent } from './firstyear/firstyear.component';
import { Firstyear1Component } from './firstyear1/firstyear1.component';
import { HomeComponent } from './home/home.component';
import { ItComponent } from './it/it.component';
import { JsComponent } from './js/js.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { SecondyearComponent } from './secondyear/secondyear.component';
import { Secondyear1Component } from './secondyear1/secondyear1.component';
import { StudentsComponent } from './students/students.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TsComponent } from './ts/ts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  {
    path: 'students',
    component: StudentsComponent,
    children: [
      {
        path: 'cse',
        component: CseComponent,
        children: [
          { path: 'firstyear', component: FirstyearComponent },
          { path: 'secondyear', component: SecondyearComponent },
        ],
      },
      {
        path: 'ece',
        component: EceComponent,
        children: [
          { path: 'firstyear1', component: Firstyear1Component },
          { path: 'secondyear1', component: Secondyear1Component },
        ],
      },
    ],
  },
  {
    path: 'dept-activities',
    component: DeptActivitiesComponent,
    children: [
      { path: 'cse1', component: Cse1Component },
      { path: 'it', component: ItComponent },
    ],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactus', component: ContactusComponent },
  {
    path: 'technologies',
    component: TechnologiesComponent,
    children: [
      { 
        path: 'js',
        component: JsComponent,
        children: [
          { path: 'firstyear', component: FirstyearComponent },
          { path: 'secondyear', component: SecondyearComponent },
          { path: 'secondyear1', component: Secondyear1Component },
        ],
      },
      { path: 'ts', component: TsComponent },
      { path: 'bs', component: BsComponent },
    ],
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
