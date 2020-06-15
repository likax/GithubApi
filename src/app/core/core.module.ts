
import { LoadingService } from "./services/loading.service";
import { FollowingService } from "./services/following.service";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { UsersService } from "./services/users.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FollowersService } from "./services/followers.service";
import { customHeaderInterceptor } from "./interceptors/custom-header.interceptor";
import { RepositoriesService } from "./services/repositories.service";
import { LoadingInterceptor } from "./interceptors/loading-interceptor";
import { ContributorsService } from "./services/contributors.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    LoadingService,
    UsersService,
    FollowingService,
    FollowersService,
    RepositoriesService,
    ContributorsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: customHeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
