import { Injectable } from '@angular/core';
import { UserAttributes } from '../models/user-attributes';
import { UserModel } from '../models/user-model'
import { UserPermissions } from '../models/user-permissions';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersInitial = new Array<UserModel>();
  users = new Array<UserModel>();
  permissions = new Array<UserPermissions>();

  constructor() {
    this.seedUsers()
  }

  getAllUsers() {
    return this.users;
  }

  deleteUser(id: number) {
    this.users = this.users.filter(x => x.id != id);
  }

  getUserById(id: number | null): UserModel {
    if (id == null) {
      return this.getEmptyUser();
    }

    const user = this.users.find(x => x.id == id);
    if (user == undefined) {
      return this.getEmptyUser();
    }

    return JSON.parse(JSON.stringify(user));
  }

  getEmptyUser(): UserModel {
    return new UserModel(0, "", "", "", "", "", false, []);
  }

  addUser(newUser: UserModel, seeding = false) {
    if (newUser.id != 0 && !seeding) {
      const existingUser = this.users.find(x => x.id == newUser.id);
      if (existingUser != undefined) {
        const existingIndex = this.users.indexOf(existingUser);
        this.users[existingIndex] = newUser;
      }
    } else {
      this.users.push(newUser);
    }
  }

  paginateUsers(pageNumber: number, pageSize: number) {
    return this.users.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }

  orderUsers(userAttribute: UserAttributes) {
    this.users = this.users.sort((x, y) => x[userAttribute] > y[userAttribute] ? 1 : -1);
  }

  filterUsers(userAttribute: UserAttributes, value: string | boolean) {
    this.users = this.users.filter(x=> x[userAttribute] == value);
  }

  resetUsers() {
    this.users = this.usersInitial;
  }

  seedUsers() {
    let permission = new UserPermissions(1, "Create", "User can create stuff");
    this.permissions.push(permission);
    permission = new UserPermissions(2, "Read", "User can read stuff");
    this.permissions.push(permission);
    permission = new UserPermissions(3, "Update", "User can update stuff");
    this.permissions.push(permission);
    permission = new UserPermissions(4, "Delete", "User can delete stuff");
    this.permissions.push(permission);

    let user = new UserModel(1, "First", "User", "firstUserName", "firstPass", "firstUser@email.com", true, []);
    this.addUser(user, true);
    user = new UserModel(2, "Second", "User", "secondUserName", "secondPass", "secondUser@email.com", true, []);
    this.addUser(user, true);
    user = new UserModel(3, "Third", "User", "ThirdUserName", "Third", "ThirdUserName@email.com", true, []);
    this.addUser(user, true);
    user = new UserModel(4, "Fourth", "User", "FourthUserName", "Fourth", "FourthUserName@email.com", true, []);
    this.addUser(user, true);
    user = new UserModel(5, "Fifth", "User", "FifthUserName", "Fifth", "FifthUserName@email.com", true, []);
    this.addUser(user, true);
    user = new UserModel(6, "Sixth", "User", "SixthUserName", "Sixth", "SixthUserName@email.com", true, []);
    this.addUser(user, true);
    user = new UserModel(7, "Seventh", "User", "SeventhUserName", "Seventh", "SeventhUserName@email.com", false, []);
    this.addUser(user, true);
    user = new UserModel(8, "Eight", "User", "EightUserName", "Eight", "EightUserName@email.com", true, []);
    this.addUser(user, true);
    user = new UserModel(9, "Ninth", "User", "NinthUserName", "Ninth", "NinthUserName@email.com", true, []);
    this.addUser(user, true);
    user = new UserModel(10, "Tenth", "User", "TenthUserName", "Tenth", "TenthUserName@email.com", true, []);
    this.addUser(user, true);
    user = new UserModel(11, "11th", "User", "11thUserName", "11th", "11thUserName@email.com", false, []);
    this.addUser(user, true);
    user = new UserModel(12, "12th", "User", "12thUserName", "12th", "12thUserName@email.com", true, []);
    this.addUser(user, true);
    user = new UserModel(13, "13th", "User", "13thUserName", "13th", "13thUserName@email.com", true, []);
    this.addUser(user, true);
    user = new UserModel(14, "14th", "User", "14thUserName", "14th", "14thUserName@email.com", false, []);
    this.addUser(user, true);
    user = new UserModel(15, "15th", "User", "15thUserName", "15th", "15thUserName@email.com", true, []);
    this.addUser(user, true);
    user = new UserModel(16, "16th", "User", "16thUserName", "16th", "16thUserName@email.com", false, []);
    this.addUser(user, true);
    user = new UserModel(17, "17th", "User", "17thUserName", "17th", "17thUserName@email.com", false, []);
    this.addUser(user, true);
    user = new UserModel(18, "18th", "User", "18thUserName", "18th", "18thUserName@email.com", true, []);
    this.addUser(user, true);
    user = new UserModel(19, "19th", "User", "19thUserName", "19th", "19thUserName@email.com", false, []);
    this.addUser(user, true);
    user = new UserModel(20, "20th", "User", "20thUserName", "20th", "20thUserName@email.com", true, []);
    this.addUser(user, true);
    user = new UserModel(21, "21st", "User", "21stUserName", "21st", "21stUserName@email.com", false, []);
    this.addUser(user, true);

    this.usersInitial = this.users;
  }
}
