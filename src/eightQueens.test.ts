import { generateQueensBoard as generateQueensBoard } from "./eightQueens";
import { I, Queen } from "./queen";
import { RandomQueenPlacer } from "./queenPlacer";

describe("when generating a partial board", () => {
    it("should return the requested number of queens", () => {
        var requestedNumberOfQueens = 2

        var queens = generateQueensBoard(requestedNumberOfQueens);

        expect(queens.length).toBe(requestedNumberOfQueens)
    })

    it("should place queens so that they cannot capture each other", () => {
        var queens = generateQueensBoard(2);

        expect(queens[0].checkRelationshipWith(queens[1])).toBe(I.CANT_CAPTURE)
    })
})

describe("When placing queens randomly and the first set of guesses leads to a dead end", () => {
    it("should be able to roll back decisions and try again", () => {
        var requestedNumberOfQueens = 7;
        var placer = new RandomQueenPlacer("seed")
        var queens = generateQueensBoard(requestedNumberOfQueens, placer);

        expect(queens.length).toBe(requestedNumberOfQueens)
        for(var queen of queens){
            for(var otherQueen of queens){
                expect(queen.checkRelationshipWith(otherQueen)).not.toBe(I.CAN_CAPTURE)
            }
        }
    })
})


describe("When generating a full board", () => {
    it("should return eight queens", () => {
        var queens = generateQueensBoard(8);
        expect(queens.length).toBe(8);
        for(let queen of queens){
            expect(queen).toBeInstanceOf(Queen)
        }
    })

    it("should place each queen on a different spot", () => {
        var queens = generateQueensBoard(8);
        expect(queens.length).toBe(8);
        for(let index in queens){
            for(let otherIndex in queens){
                if(index !== otherIndex){
                    expect(queens[index].position).not.toEqual(queens[otherIndex].position)
                }
            }
        }
    })

    it("should place each queen within the bounds of the board", () => {
        var queens = generateQueensBoard(8);
        for(let queen of queens){
            expect(queen.position.x).toBeLessThan(8)
            expect(queen.position.y).toBeLessThan(8)
        }
    })

    it("should place the queens such that none of them can capture the others", () => {
        var queens = generateQueensBoard(8);
        for(var queen of queens){
            for(var otherQueen of queens){
                expect(queen.checkRelationshipWith(otherQueen)).not.toBe(I.CAN_CAPTURE);
            }
        }
    })
})

describe("when testing the application many times", () => {
    it("should always find a solution", () => {
        for(var i = 0; i < 1000; i++){
            var queens = generateQueensBoard(8);
            for(var queen of queens){
                for(var otherQueen of queens){
                    expect(queen.checkRelationshipWith(otherQueen)).not.toBe(I.CAN_CAPTURE);
                }
            }
            console.log(`succeeded on attempt ${i}`)
        }
    })
})