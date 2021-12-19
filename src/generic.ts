function getData(value: any){
    return value;
}

console.log(getData("Rahmat").length);
console.log(getData(122333).length);

// generic
function myData<T>(value: T) {
    return value
}

console.log(myData("Rahmat").length);
console.log(myData(122333));

const arrowFunc = <T, >(value: T) => {

}