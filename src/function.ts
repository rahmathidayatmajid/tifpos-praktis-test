// tipe data pada balikan function

function getName(): string {
    return "Halo, nama saya Rahmat";
}

console.log(getName());

function getAge(): number {
    return 27;
}

function printName(): void {
    console.log('print nama');
}

printName();

/////////////////////////////////

function multiply(val1: number, val2:number): number {
    return val1 * val2;
}

const result = multiply(10,5);
console.log(result)

// function as type
type Tambah =  (val1: number, val2: number) => number;

let Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}

// default parameter
const fullName = (first: string, last: string = "Super Admin"): string => {
    return first + " " + last;
}

console.log(fullName("Rahmat"));

// optional parameter
const getUmur = (val1: number, val2?: number): string => {
    return val1 + " " + val2;
}

console.log(getUmur(20, 22))