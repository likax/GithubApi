import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { FollowersService } from "src/app/core/services/followers.service";
import { Follow } from "src/app/models/threetypes";
import { LoadingService } from "src/app/core/services/loading.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-followers",
  templateUrl: "./followers.component.html",
  styleUrls: ["./followers.component.scss"],
})
export class FollowersComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscription2$: Subscription;
  followers: Follow[];
  username: string = "";
  numberOfPages: number;
  curPage: number = 1;
  pageAmout: number = 1;
  dataNum: number = 20;
  contentSize: number = 10;

  constructor(
    private followersService: FollowersService,
    private route: ActivatedRoute,
    public loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.subscription1$ = this.route.params.subscribe((params: Params) => {
      const getFollowers = params["username"];
      this.username = getFollowers;
      this.getFollowers(getFollowers);
    });
  }

  getFollowers(getFollowers: string) {
    this.subscription2$ = this.followersService
      .getFollowers(getFollowers,this.pageAmout,this.dataNum)
      .subscribe((responsedFollowers: Follow[]) => {
        this.followers = responsedFollowers;
        this.numberOfPages = this.followers.length;
        console.log(this.followers.length)
      });
  }


  shouldDisplay(i: number) {
    return (
      i >= Math.abs(this.curPage - i) &&
      i <= Math.ceil(this.numberOfPages / this.contentSize)
    );
  }
  trackByFn(index: number) {
    return index;
  }

  ngOnDestroy() {
    this.subscription1$.unsubscribe();
    this.subscription2$.unsubscribe();
  }
}
