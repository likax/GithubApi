import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { AngularSplitModule } from 'angular-split';


@NgModule({
  declarations: [
    HomeRoutingModule.Components  
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularSplitModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
