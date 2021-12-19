"use strict";
// tipe data pada balikan function
function getName() {
    return "Halo, nama saya Rahmat";
}
console.log(getName());
function getAge() {
    return 27;
}
function printName() {
    console.log('print nama');
}
printName();
/////////////////////////////////
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(10, 5);
console.log(result);
let Add = (val1, val2) => {
    return val1 + val2;
};
// default parameter
const fullName = (first, last = "Super Admin") => {
    return first + " " + last;
};
console.log(fullName("Rahmat"));
// optional parameter
const getUmur = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(getUmur(20, 22));
