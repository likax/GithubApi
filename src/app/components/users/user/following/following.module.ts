import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FollowingRoutingModule } from './following-routing.module';


@NgModule({
  declarations: [
    FollowingRoutingModule.Components,
    
  ],
  imports: [
    CommonModule,
    FollowingRoutingModule,
    SharedModule
  ]
})
export class FollowingModule { }
