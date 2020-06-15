import { LoadingService } from "./../../core/services/loading.service";
import { User } from "../../models/user";
import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/core/services/users.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  subscription1$: Subscription;
  pageNum: number = 1;
  constructor(
    private userService: UsersService,
    public loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.getUsers();
  }

   getUsers(): void {
  
    this.subscription1$ = this.userService
      .getUsers()
      .subscribe((data: User[]) => (this.users = data));

  }



  // delete request არ მუშაობდა ამიტო manual-ად წავშალე
  userOnDelete(id: any) {
    this.users = this.users.filter((val) => {
      return val.id != id;
    });
    console.log("received");
  }





  trackByFn(index: number) {
    return index; 
  }

  
  ngOnDestroy() {
    this.subscription1$.unsubscribe();
  }
}
