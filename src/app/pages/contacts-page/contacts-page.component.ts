import {Component, OnInit} from '@angular/core';
import {configJson} from '../../config/config';
import {UserService} from '../../services/user.service';
import {GroupUser, Result, User} from '../../models/user.model';
import {StateService} from '../../services/state.service';
import {groupedUsersByFirstLetter} from '../../utils/utils';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  public loading = false;
  public pageTitle = configJson.title;
  public filters = configJson.tabs;

  constructor(
    private stateService: StateService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getUserDetails().subscribe((result: Result) => {
      this.stateService.users = result.results;
      this.stateService.groupUser = groupedUsersByFirstLetter(result.results, this.filters);
      this.loading = false;
    });
  }
}
