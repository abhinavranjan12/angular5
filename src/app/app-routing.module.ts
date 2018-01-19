import { BrowserModule } from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent }      from './login/login.component';
import { SignupComponent }      from './signup/signup.component';
import { DashboardComponent }      from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/