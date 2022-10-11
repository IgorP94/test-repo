import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserAttributes } from 'src/app/models/user-attributes';
import { UserModel } from 'src/app/models/user-model';
import { UsersService } from 'src/app/services/users-service.service';
import { DeleteUserModalComponent } from '../delete-user-modal/delete-user-modal.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild('filterInput') filterInput: ElementRef | undefined;
  @ViewChild('deleteUserModal') deleteUserModal: DeleteUserModalComponent | undefined;

  PAGE_SIZE = 10;
  DEFAULT_DROPDOWN_TEXT_ORDER = "Pick Order Attribute";
  DEFAULT_DROPDOWN_FILTERING = "Pick Filter Attribute";
  filterValue: string | boolean = false;

  selectedPage = 1;
  totalUsers = 0;
  selectedFilter: UserAttributes | undefined;

  displayColumns = [
    "First Name",
    "Last Name",
    "Username",
    "Email",
    "Status",
    "Actions"
  ];

  users: Array<UserModel> | undefined;
  userAttributes = Object.values(UserAttributes)

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

  orderUsersBy(value: string) {
    const userAttribute: UserAttributes = UserAttributes[value as keyof typeof UserAttributes];
    this.usersService.orderUsers(userAttribute);
    this.loadUsers(this.selectedPage);
  }

  selectFilter(value: string) {
    this.selectedFilter = UserAttributes[value as keyof typeof UserAttributes];
  }

  applyFilter() {
    if (this.selectedFilter != undefined) {
      if (this.selectedFilter !== 'status' && this.filterInput) {
        this.filterValue = this.filterInput.nativeElement.value;
      }
      this.usersService.filterUsers(this.selectedFilter, this.filterValue);
      this.selectedPage = 1;
      this.loadUsers(this.selectedPage);
      
    }
  }

  toggleStatusFilter($event: any) {
    this.filterValue = $event.target.checked;
  }

  resetFilter() {
    this.usersService.resetUsers();
    this.loadUsers(this.selectedPage);
  }

  openDeleteModal(userModel: UserModel) {
    if (this.deleteUserModal) {
      this.deleteUserModal.openModal(userModel);
    }
  }
}
