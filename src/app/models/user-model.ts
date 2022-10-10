import { UserRole } from "./user-roles.enum";

export class UserModel {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    email: string;
    status: string;
    role: UserRole;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        userName: string,
        password: string,
        email: string,
        status: string,
        role: UserRole
        ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.status = status;
        this.role = role;
    }
}