import { UserPermissions } from "./user-permissions";

export class UserModel {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    email: string;
    status: string;
    permissions: UserPermissions[];

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        userName: string,
        password: string,
        email: string,
        status: string,
        permissions: UserPermissions[]
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.status = status;
        this.permissions = permissions;
    }
}