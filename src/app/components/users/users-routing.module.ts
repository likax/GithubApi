import { UserDetailsComponent } from "./user/user-details/user-details.component";
import { UsersComponent } from "./users.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "", component: UsersComponent },
  {
    path: ":username",
    component: UserDetailsComponent},
      {
        path: ":username/following",
        loadChildren: () =>
          import("./user/following/following.module").then(
            (m) => m.FollowingModule
          ),
      },
      {
        path: ":username/followers",
        loadChildren: () =>
          import("./user/followers/followers.module").then(
            (m) => m.FollowersModule
          ),
      },
      {
        path: ":username/repos",
        loadChildren: () =>
          import("./user/repositories/repositories.module").then(
            (m) => m.RepositoriesModule
          ),
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
  static Components = [UsersComponent, UserDetailsComponent, UserComponent];
}
