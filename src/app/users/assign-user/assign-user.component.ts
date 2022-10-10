import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { UserRole } from 'src/app/models/user-roles.enum';
import { UsersService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-assign-user',
  templateUrl: './assign-user.component.html',
  styleUrls: ['./assign-user.component.scss']
})
export class AssignUserComponent implements OnInit {
  DEFAULT_DROPDOWN_OPTION = "Select a Role"

  userModel: UserModel | undefined;
  roles: Array<string> = Object.values(UserRole);

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id == null) {
        this.router.navigate(['/']);
        return;
      }
      this.setUserValues(+id);
    })
  }

  setUserValues(id: number) {
    this.userModel = this.userService.getUserById(id);
  }

  roleSelected($event: any) {
    this.userModel!.role = $event;
  }

}
