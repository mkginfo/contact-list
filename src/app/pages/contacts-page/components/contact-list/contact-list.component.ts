import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../models/user.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {

  @Input() users: User[] = undefined;

  constructor() {}

  ngOnInit(): void {
    this.setUserList();
  }

  setUserList() {
    this.users = this.users.map((user: User) => {
      return {
        ...user,
        selected: false
      };
    });
  }

  onUserClick(selectedUser) {
    this.users = this.users.map((user: User) => {
      if (selectedUser.id === user.id) {
        user.selected = true;
      } else {
        user.selected = false;
      }
      return user;
    });
    console.log(this.users);
  }

}
