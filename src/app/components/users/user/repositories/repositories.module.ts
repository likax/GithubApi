import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RepositoriesRoutingModule } from "./repositories-routing.module";


@NgModule({
  declarations: [RepositoriesRoutingModule.Components],
  imports: [CommonModule, RepositoriesRoutingModule, SharedModule],
})
export class RepositoriesModule {}
