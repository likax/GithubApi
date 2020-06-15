import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationComponent } from "./pagination/pagination.component";
import { LoadingComponent } from "./loading/loading.component";
import { ModalComponent } from "./modal/modal.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { UserSharedComponent } from '../components/users/user/user-shared/user-shared.component';

@NgModule({
  declarations: [
    PaginationComponent,
    LoadingComponent,
    ModalComponent,
    NavbarComponent,
    UserSharedComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  exports: [
    LoadingComponent,
    PaginationComponent,
    ModalComponent,
    NavbarComponent,
    UserSharedComponent
  ],
})
export class SharedModule {}
