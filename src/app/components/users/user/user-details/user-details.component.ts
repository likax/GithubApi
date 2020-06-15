import { UsersService } from "../../../../core/services/users.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { User } from "src/app/models/user";
import { Location } from "@angular/common";
@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getDetails();
  }
  
  getDetails() {
    this.route.params.subscribe((params: Params) => {
      const userName = params['username'];
      this.usersService.getUser(userName).subscribe((responsedUser: User) => {
      this.user = responsedUser;
    });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
