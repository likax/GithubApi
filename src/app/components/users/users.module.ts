import { UsersService } from '../../core/services/users.service';
import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersRoutingModule } from "./users-routing.module";


@NgModule({
  declarations: [UsersRoutingModule.Components],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
  providers: []
})
export class UsersModule {}
