import { Coordinates } from "./coordinates";

export class Queen {
    public position: Coordinates;

    constructor(x: number = 0, y: number = 0) {
        this.position = new Coordinates(x, y);
    }

    checkRelationshipWith(otherQueen: Queen): I {
        if(otherQueen.position.equals(this.position)){
            return I.AM_THE_SAME_PIECE
        }
        if(this.isOnTheSameRowAs(otherQueen)){
            return I.CAN_CAPTURE
        }
        if(this.isOnTheSameColumnAs(otherQueen)){
            return I.CAN_CAPTURE
        }

        if(this.isOnTheSameDiagonalAs(otherQueen)){
            return I.CAN_CAPTURE
        }
        return I.CANT_CAPTURE
    }

    isOnTheSameRowAs(otherQueen: Queen): boolean {
        return otherQueen.position.x == this.position.x
    }

    isOnTheSameColumnAs(otherQueen: Queen): boolean {
        return otherQueen.position.y == this.position.y
    }

    isOnTheSameDiagonalAs(otherQueen: Queen): boolean {
        var absoluteDeltaX = Math.abs(this.position.x - otherQueen.position.x)
        var absoluteDeltaY = Math.abs(this.position.y - otherQueen.position.y)
        return absoluteDeltaX == absoluteDeltaY
    }
}

export enum I {
    AM_THE_SAME_PIECE,
    CANT_CAPTURE,
    CAN_CAPTURE
}