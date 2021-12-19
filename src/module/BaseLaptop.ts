import ILaptop from "./ILaptop";
import * as Keyboard from "./Keyboard";
import { b } from "./Keyboard"

abstract class BaseLaptop<T> implements ILaptop<T> {
    name: string;
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;

    constructor(
        name: string, 
        type: T, 
        numeric: boolean, 
        touchBotton: boolean
    ) {
        this.name = name;
        this.type = type;
        this.withNumeric = numeric;
        this.withTouchButton = touchBotton;
    }

    a(): void {
        console.log(Keyboard.a());
    }

    b(): void {
        console.log(b());
    }
}

export default BaseLaptop;