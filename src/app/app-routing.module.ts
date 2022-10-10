import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignUserComponent } from './users/assign-user/assign-user.component';
import { UpsertUserComponent } from './users/upsert-user/upsert-user.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'upsert-user', component: UpsertUserComponent }, //create user
  { path: 'upsert-user/:id', component: UpsertUserComponent }, // edit user
  { path: 'assign-user/:id', component: AssignUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
