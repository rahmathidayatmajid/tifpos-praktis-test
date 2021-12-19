"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// class dasar 
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
let user = new User("Rahmat", 25);
console.log(user);
// inheritance - pewarisan
/**
 * public = bisa diakses semua class/dari luar kelas
 * protected = hanya bisa diakses di class tersebut & class turunannya
 * private = hanya bisa diakses dari class itu sendiri
 */
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
    set email(value) {
        if (value.length < 15) {
            this._email = "Email salah";
        }
        else {
            this._email = value;
        }
        ;
    }
    ;
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "Admin";
// let admin = new Admin("0811111","Toni", 20);
// admin.getName();
// admin.getRole();
// admin.setName("Tiara")
// admin.phone;
// admin.email = "test@user.com";
// console.log(admin.email);
let admin = Admin.getRoleName;
console.log(admin);
