export class Coordinates {
    public x: number
    public y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    equals(other: Coordinates): boolean {
        if(this.x != other.x){
            return false
        }
        if(this.y != other.y){
            return false
        }

        return true;
    }

    toString(): string {
        return `${this.x}${this.y}`
    }
}