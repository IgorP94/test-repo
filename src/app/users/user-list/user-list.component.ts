import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { UsersService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  PAGE_SIZE = 10;
  selectedPage = 1;
  totalUsers = 0;

  displayColumns = [
    "First Name",
    "Last Name",
    "Username",
    "Email",
    "Status",
    "Actions"
  ];

  users: Array<UserModel> | undefined;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadUsers(1);
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
    this.loadUsers(this.selectedPage);
  }

  pageChanged($event: number) {
    this.selectedPage = $event;
    this.loadUsers(this.selectedPage);
  }

  loadUsers(selectedPage: number) {
    this.users = this.usersService.paginateUsers(selectedPage, this.PAGE_SIZE);
    this.totalUsers = this.usersService.users.length;
  }
}
