import { LoadingService } from "./../../../../core/services/loading.service";
import { RepositoriesService } from "./../../../../core/services/repositories.service";
import { Component, OnInit, OnDestroy, OnChanges } from "@angular/core";
import { Repo } from "src/app/models/threetypes";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription, interval } from "rxjs";
import { switchMap, startWith } from "rxjs/operators";

@Component({
  selector: "app-repositories",
  templateUrl: "./repositories.component.html",
  styleUrls: ["./repositories.component.scss"],
})
export class RepositoriesComponent implements OnInit, OnDestroy {
  repos: Repo[];
  username: string = "";
  name: string = "";
  subscription1$: Subscription;
  subscription2$: Subscription;
  numberOfPages: number;
  curPage: number = 1;
  pageAmout: number = 1;
  dataNum: number = 30;
  contentSize: number = 12;

  constructor(
    private repositoriesService: RepositoriesService,
    private route: ActivatedRoute,
    public loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.subscription1$ = this.route.params.subscribe((params: Params) => {
      const username = params["username"];
      this.username = username;
      this.getRepositoriesList(username);
    });
  }

  getRepositoriesList(username: string) {
    this.subscription2$ = this.repositoriesService
      .getRepositories(username, this.pageAmout,this.dataNum)
      .subscribe((repos: Repo[]) => {
        this.repos = repos;
        this.numberOfPages = this.repos.length;
        repos.forEach((val) => {
          this.name = val.name;
          console.log(this.repos.length);
        });
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
