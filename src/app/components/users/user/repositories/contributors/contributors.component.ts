import { LoadingService } from "../../../../../core/services/loading.service";
import { Component, OnInit } from "@angular/core";
import { ContributorsService } from "src/app/core/services/contributors.service";
import { ActivatedRoute, Params } from "@angular/router";
import { contributor } from 'src/app/models/threetypes';

@Component({
  selector: "app-contributors",
  templateUrl: "./contributors.component.html",
  styleUrls: ["./contributors.component.scss"],
})
export class ContributorsComponent implements OnInit {
  contributors: contributor[] = [];
  username: string = "";
  pageNum: number = 1;
  numberOfPages: number;
  curPage: number = 1;
  pageAmout: number = 1;
  dataNum: number = 10;
  contentSize: number = 10;
  constructor(
    private route: ActivatedRoute,
    private contributorsService: ContributorsService,
    public loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.getContributors();
  }
  getContributors() {
    this.route.params.subscribe((params: Params) => {
      const username = params["username"];
      const name = params["name"];
      this.username = username;
      this.contributorsService
        .getContributors(username, name, this.pageAmout, this.dataNum)
        .subscribe((responsedContributors: contributor[]) => {
          this.contributors = responsedContributors;
          this.numberOfPages = this.contributors.length;
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
}
