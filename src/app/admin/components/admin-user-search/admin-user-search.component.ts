import { Subscription } from 'rxjs/Subscription';
import { AppUser } from 'shared/models/app-user';
import { UserService } from 'shared/services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-admin-user-search',
  templateUrl: './admin-user-search.component.html',
  styleUrls: ['./admin-user-search.component.css']
})
export class AdminUserSearchComponent implements OnInit, OnDestroy {
  users: AppUser[] = [];
  filteredUsers: AppUser[] = [];
  userSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(users => this.filteredUsers = this.users = users);
  }

  filter(query: string) {
    this.filteredUsers = (query) ?
      this.users.filter(user => user.displayName.toLowerCase().includes(query.toLowerCase())) :
      this.users;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
