import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { PaginatorComponent } from './shared/paginator/paginator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpsertUserComponent } from './users/upsert-user/upsert-user.component';
import { AssignUserComponent } from './users/assign-user/assign-user.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { DeleteUserModalComponent } from './users/delete-user-modal/delete-user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PaginatorComponent,
    UpsertUserComponent,
    AssignUserComponent,
    DropdownComponent,
    ViewUserComponent,
    DeleteUserModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
