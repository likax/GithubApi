import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowersRoutingModule } from './followers-routing.module';


@NgModule({
  declarations: [
    FollowersRoutingModule.Components,
    
  ],
  imports: [
    CommonModule,
    FollowersRoutingModule,
    SharedModule
  ]
})
export class FollowersModule { }
