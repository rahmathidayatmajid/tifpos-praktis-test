// class dasar 
export class User {
    public name: string;

    constructor(name: string, public age: number) {
        this.name = name;
    }

    setName(value: string): void {
        this.name = value;
    }

    getName = (): string => {
        return this.name
    }
}

let user = new User("Rahmat", 25);
console.log(user);

// inheritance - pewarisan
/**
 * public = bisa diakses semua class/dari luar kelas
 * protected = hanya bisa diakses di class tersebut & class turunannya 
 * private = hanya bisa diakses dari class itu sendiri
 */

class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";
    static getRoleName: string = "Admin";

    constructor(phone: string, name: string, age: number) {
        super(name, age);
        this.phone = phone
    }

    getRole(): { read: boolean, write: boolean } {
        return {
            read: this.read,
            write: this.write
        };
    };
    
    set email(value: string){
        if(value.length < 15) {
            this._email = "Email salah";
        } else {
            this._email = value;
        };
    };

    get email(): string {
        return this._email;
    }
}

// let admin = new Admin("0811111","Toni", 20);
// admin.getName();
// admin.getRole();
// admin.setName("Tiara")
// admin.phone;

// admin.email = "test@user.com";
// console.log(admin.email);

let admin = Admin.getRoleName;
console.log(admin)