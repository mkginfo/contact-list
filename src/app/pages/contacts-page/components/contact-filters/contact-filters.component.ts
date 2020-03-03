import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {StateService} from '../../../../services/state.service';
import {GroupUser, User} from '../../../../models/user.model';
import { configJson } from '../../../../config/config';

@Component({
  selector: 'app-contact-filters',
  templateUrl: './contact-filters.component.html',
  styleUrls: ['./contact-filters.component.scss']
})
export class ContactFiltersComponent implements OnInit {

  public filters = configJson.tabs;
  selected = new FormControl(0);


  constructor(
    public stateService: StateService,
  ) { }

  ngOnInit(): void {
    console.log(this.stateService.groupUser);
  }

  getUsersCountByFilter(filter: string): number {
    const currentTab = this.getUserByFilter(filter);
    return currentTab ? currentTab.users.length : 0 ;
  }

  getUsersByFilter(filter: string): User[] {
    const currentTab = this.getUserByFilter(filter);
    return currentTab ? currentTab.users : [] ;
  }

  getUserByFilter(filter: string): GroupUser {
    return this.stateService.groupUser.find(item => item.letter.toLocaleLowerCase() === filter);
  }

  onSelectedTab($event) {
    this.selected.setValue($event);
    this.stateService.selectedTab = $event;
  }

  addTab(selectAfterAdding: boolean) {
    this.filters.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.filters.length - 1);
    }
  }

  removeTab(index: number) {
    this.filters.splice(index, 1);
  }

}
