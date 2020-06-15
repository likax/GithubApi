import { User } from '../../../models/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() userId: EventEmitter<number> = new EventEmitter<number>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {}

  onDelete(id: number): void {
    this.userId.emit(id);
  }

}
