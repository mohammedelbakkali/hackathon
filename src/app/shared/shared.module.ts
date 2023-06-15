import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialExampleModule } from 'src/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialExampleModule
  ]
})
export class SharedModule { }
