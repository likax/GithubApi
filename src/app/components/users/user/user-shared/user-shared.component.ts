import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-shared',
  templateUrl: './user-shared.component.html',
  styleUrls: ['./user-shared.component.scss']
})
export class UserSharedComponent implements OnInit {
  @Input() person;
  constructor() { }

  ngOnInit() {
  }

}
