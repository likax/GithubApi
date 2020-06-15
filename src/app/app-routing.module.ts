import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContributorsComponent } from './components/users/user/repositories/contributors/contributors.component';

const routes: Routes = [
 
  { path: "", redirectTo: "/users", pathMatch: "full" },
  {
    path: "users",
    loadChildren: () =>
      import("./components/users/users.module").then((m) => m.UsersModule),
  },

  {
    path: 'repos/:username/:name/contributors', component: ContributorsComponent
  },

  {
    path: "**", component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
