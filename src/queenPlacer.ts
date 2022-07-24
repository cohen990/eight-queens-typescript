import { I, Queen } from "./queen";
import seedrandom, { PRNG } from "seedrandom";

export interface QueenPlacer {
    placeQueen(queens: Queen[], priorAttempts: string[]): Queen
}

export class RandomQueenPlacer implements QueenPlacer {
    private rng: PRNG

    constructor(seed: string = undefined, ) {
        this.rng = seedrandom(seed)
    }

    placeQueen(queens: Queen[], priorAttempts: string[] = []): Queen | undefined {
        var attempts = new Set<string>(priorAttempts)
        var queen = this.newRandomlyPlacedQueen()
        while(true){
            if(this.placementIsValid(queens, queen) && this.wasNotPreviouslyAttempted(attempts, queen)){
                return queen
            }
            attempts.add(`${queen.position.toString()}`)

            if([...attempts.keys()].length == 64){
                return
            }
            queen = this.newRandomlyPlacedQueen()

        }
    }

    newRandomlyPlacedQueen(): Queen {
        var x = Math.floor(this.rng() * 8)
        var y = Math.floor(this.rng() * 8)
        return new Queen(x, y)
    }

    placementIsValid(queens: Queen[], queen: Queen): boolean {
        for(var otherQueen of queens){
            if(otherQueen.checkRelationshipWith(queen) != I.CANT_CAPTURE){
                return false;
            }
        }
        return true;
    }

    wasNotPreviouslyAttempted(attempts: Set<string>, queen: Queen): boolean {
        return !attempts.has(queen.position.toString())
    }
}

