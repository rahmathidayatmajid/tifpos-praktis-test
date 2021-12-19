class List<T> {
    private data: T[];

    constructor(...elements: T[]){
        this.data = elements
    }

    add(elements: T): void {
        this.data.push(elements)
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements)
    }

    getAll(): T[] {
        return this.data;
    }
}

// let numbers = new List<number>(1,2,3);
// numbers.add(4);
// numbers.addMultiple(5,6,7);
// console.log(numbers.getAll());

let random = new List<number | string>(1, 'a', 2, 'b', 3);
random.add(4);
random.addMultiple(5,"ab",6,7);
console.log(random.getAll());