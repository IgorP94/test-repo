import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model'
import { UserRole } from '../models/user-roles.enum';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = new Array<UserModel>();

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

    const user = this.users.find(x=> x.id == id);
    if (user == undefined) {
      return this.getEmptyUser();
    }
    
    return user;
  }

  getEmptyUser(): UserModel {
    return new UserModel(0, "", "", "", "", "", "", UserRole.Guest);
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

  seedUsers() {
    let user = new UserModel(1, "First", "User", "firstUserName", "firstPass", "firstUser@email.com", "active", UserRole.Admin);
    this.addUser(user, true);
    user = new UserModel(2, "Second", "User", "secondUserName", "secondPass", "secondUser@email.com", "active", UserRole.Guest);
    this.addUser(user, true);
    user = new UserModel(3, "Third", "User", "ThirdUserName", "Third", "ThirdUserName@email.com", "active", UserRole.Worker);
    this.addUser(user, true);
    user = new UserModel(4, "Fourth", "User", "FourthUserName", "Fourth", "FourthUserName@email.com", "active", UserRole.Guest);
    this.addUser(user, true);
    user = new UserModel(5, "Fifth", "User", "FifthUserName", "Fifth", "FifthUserName@email.com", "active", UserRole.Guest);
    this.addUser(user, true);
    user = new UserModel(6, "Sixth", "User", "SixthUserName", "Sixth", "SixthUserName@email.com", "active", UserRole.Guest);
    this.addUser(user, true);
    user = new UserModel(7, "Seventh", "User", "SeventhUserName", "Seventh", "SeventhUserName@email.com", "inactive", UserRole.Guest);
    this.addUser(user, true);
    user = new UserModel(8, "Eight", "User", "EightUserName", "Eight", "EightUserName@email.com", "active", UserRole.Worker);
    this.addUser(user, true);
    user = new UserModel(9, "Ninth", "User", "NinthUserName", "Ninth", "NinthUserName@email.com", "active", UserRole.Worker);
    this.addUser(user, true);
    user = new UserModel(10, "Tenth", "User", "TenthUserName", "Tenth", "TenthUserName@email.com", "active", UserRole.Worker);
    this.addUser(user, true);
    user = new UserModel(11, "11th", "User", "11thUserName", "11th", "11thUserName@email.com", "inactive", UserRole.Worker);
    this.addUser(user, true);
    user = new UserModel(12, "12th", "User", "12thUserName", "12th", "12thUserName@email.com", "active", UserRole.Worker);
    this.addUser(user, true);
    user = new UserModel(13, "13th", "User", "13thUserName", "13th", "13thUserName@email.com", "active", UserRole.Admin);
    this.addUser(user, true);
    user = new UserModel(14, "14th", "User", "14thUserName", "14th", "14thUserName@email.com", "inactive", UserRole.Admin);
    this.addUser(user, true);
    user = new UserModel(15, "15th", "User", "15thUserName", "15th", "15thUserName@email.com", "active", UserRole.Guest);
    this.addUser(user, true);
    user = new UserModel(16, "16th", "User", "16thUserName", "16th", "16thUserName@email.com", "inactive", UserRole.Worker);
    this.addUser(user, true);
    user = new UserModel(17, "17th", "User", "17thUserName", "17th", "17thUserName@email.com", "inactive", UserRole.Worker);
    this.addUser(user, true);
    user = new UserModel(18, "18th", "User", "18thUserName", "18th", "18thUserName@email.com", "active", UserRole.Worker);
    this.addUser(user, true);
    user = new UserModel(19, "19th", "User", "19thUserName", "19th", "19thUserName@email.com", "inactive", UserRole.Guest);
    this.addUser(user, true);
    user = new UserModel(20, "20th", "User", "20thUserName", "20th", "20thUserName@email.com", "active", UserRole.Guest);
    this.addUser(user, true);
    user = new UserModel(21, "21st", "User", "21stUserName", "21st", "21stUserName@email.com", "inactive", UserRole.Guest);
    this.addUser(user, true);
  }
}
