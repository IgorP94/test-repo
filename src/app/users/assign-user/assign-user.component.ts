import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { UserPermissions } from 'src/app/models/user-permissions';
import { NavigationService } from 'src/app/services/navigation.service';
import { UsersService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-assign-user',
  templateUrl: './assign-user.component.html',
  styleUrls: ['./assign-user.component.scss']
})
export class AssignUserComponent implements OnInit {
  userModel: UserModel | undefined;
  permissions: UserPermissions[] | undefined;

  constructor(private route: ActivatedRoute,
    private userService: UsersService,
    private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id == null) {
        this.navigationService.navigateBackHome();
        return;
      }
      this.setUserValues(+id);
      this.permissions = this.userService.permissions;
    })
  }

  setUserValues(id: number) {
    this.userModel = this.userService.getUserById(id);
  }

  saveChanges() {
    if (this.userModel) {
      this.userService.addUser(this.userModel);
      this.navigationService.navigateBackHome();
    }
  }

  cancelChanges() {
    this.navigationService.navigateBackHome();
  }

  userHasPermission(permission: UserPermissions): Boolean {
    return this.userModel?.permissions.find(x => permission.id == x.id) != null;
  }

  togglePermission($event: any, permission: UserPermissions) {
    if (this.userModel) {
      if ($event.target.checked) {
        this.userModel.permissions.push(permission);
      } else {
        this.userModel.permissions = this.userModel.permissions.filter(x => x.id !== permission.id);
      }
    }
  }

}
