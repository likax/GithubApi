
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularSplitModule } from "angular-split";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ContributorsComponent } from "./components/users/user/repositories/contributors/contributors.component";
import { NgxPaginationModule } from "ngx-pagination"; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ContributorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSplitModule.forRoot(),
    NgxPaginationModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
