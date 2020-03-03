import { Injectable } from '@angular/core';
import {GroupUser, User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public users: User[];
  public selectedTab: number;
  public groupUser: GroupUser[];

  constructor() { }
}
