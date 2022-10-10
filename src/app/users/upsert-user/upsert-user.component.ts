import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { UsersService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-upsert-user',
  templateUrl: './upsert-user.component.html',
  styleUrls: ['./upsert-user.component.scss']
})
export class UpsertUserComponent implements OnInit {

  isEdit = false;
  userModel: UserModel | null;
  form: FormGroup | undefined;

  constructor(private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.userModel = userService.getEmptyUser();
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id != null) {
        this.setUserValues(+id);
        this.isEdit = true;
      } else {
        this.setUserValues(null);
      }
    })
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: this.userModel?.id,
      firstName: new FormControl(this.userModel?.firstName, [Validators.required]),
      lastName: new FormControl(this.userModel?.lastName, [Validators.required]),
      userName: new FormControl(this.userModel?.userName, [Validators.required]),
      password: new FormControl(this.userModel?.password, [Validators.required]),
      email: new FormControl(this.userModel?.email, [Validators.required]),
      status: new FormControl(this.userModel?.status, [Validators.required]),
    });
  }

  setUserValues(id: number | null) {
    this.userModel = this.userService.getUserById(id);
  }

  saveUser() {
    if (this.userModel != null && this.form != null) {
      const newUserModel = {
        ...this.form.value
      }
      this.userService.addUser(newUserModel);
      this.navigateBackHome();
    }
  }

  cancelChanges() {
    this.navigateBackHome();
  }

  navigateBackHome() {
    this.router.navigate(['/']);
  }

}
