import { LoadingService } from "./../../../../core/services/loading.service";
import { Follow } from "../../../../models/threetypes";
import { FollowingService } from "./../../../../core/services/following.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { Subscription } from "rxjs";

@Component({
  selector: "app-following",
  templateUrl: "./following.component.html",
  styleUrls: ["./following.component.scss"],
})
export class FollowingComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscription2$: Subscription;
  followings: Follow[];
  // pageAmout: number = 2;
  // dataNum: number = 20;
  username: string = "";
  numberOfPages: number;
  curPage: number = 1;
  pageAmout: number = 1;
  dataNum: number = 20;
  contentSize: number = 10;

  counter = Array;
  constructor(
    private followingService: FollowingService,
    private route: ActivatedRoute,
    public loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.subscription1$ = this.route.params.subscribe((params: Params) => {
      const getFollowing = params["username"];
      this.username = getFollowing;
      this.getFollowing(getFollowing);
    });
  }

  getFollowing(getFollowing: string) {
    this.subscription2$ = this.followingService
      .getFollowing(getFollowing, this.pageAmout, this.dataNum)
      .subscribe((responsedFollowing: Follow[]) => {
        this.followings = responsedFollowing;
        this.numberOfPages = this.followings.length;
      });
  }

  trackByFn(index: number) {
    return index;
  }

  shouldDisplay(i: number) {
    return (
      i >= Math.abs(this.curPage - i) &&
      i <= Math.ceil(this.numberOfPages / this.contentSize)
    );
  }

  ngOnDestroy() {
    this.subscription1$.unsubscribe();
    this.subscription2$.unsubscribe();
  }
}
