import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { UserPermissions } from 'src/app/models/user-permissions';
import { NavigationService } from 'src/app/services/navigation.service';
import { UsersService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userModel: UserModel | undefined;

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
        this.getUser(+id);
      })
    }

    getUser(id: number) {
      this.userModel = this.userService.getUserById(id);
    }

    goHome() {
      this.navigationService.navigateBackHome();
    }
}
