import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss']
})
export class DeleteUserModalComponent {
  @Output() confirmDeletion = new EventEmitter<number>();
  hidden = true;
  userModel: UserModel | undefined;

  openModal(userModel: UserModel) {
    this.userModel = userModel;
    this.hidden = false;
  }

  confirmDelete() {
    if (this.userModel) {
      this.confirmDeletion.emit(this.userModel.id);
      this.userModel = undefined;
      this.hidden = true;
    }
  }

  cancel() {
    this.userModel = undefined;
    this.hidden = true;
  }
}
