import { I, Queen } from "./queen";

describe("When checking if a queen can capture", () => {
    it("should recognise that a queen on the same square is the same queen", () => {
        var queen = new Queen(0, 0);
        var otherQueen = new Queen(0, 0);
        
        var canCapture = queen.checkRelationshipWith(otherQueen);

        expect(canCapture).toBe(I.AM_THE_SAME_PIECE)
    })

    it("should be able to capture a piece on the same row", () => {
        var queen = new Queen(0, 0);
        var otherQueen = new Queen(0, 1);
        
        var canCapture = queen.checkRelationshipWith(otherQueen);

        expect(canCapture).toBe(I.CAN_CAPTURE)
    })

    it("should not be able to capture a piece that is not on the same row, column or diagonal", () => {
        var queen = new Queen(0, 0);
        var otherQueen = new Queen(1, 2);
        
        var canCapture = queen.checkRelationshipWith(otherQueen);

        expect(canCapture).toBe(I.CANT_CAPTURE)
    })

    it("should be able to capture a piece that is on the same column", () => {
        var queen = new Queen(0, 0);
        var otherQueen = new Queen(1, 0);
        
        var canCapture = queen.checkRelationshipWith(otherQueen);

        expect(canCapture).toBe(I.CAN_CAPTURE)
    })

    it("should be able to capture a piece that is on the same diagonal when sat at 0, 0", () => {
        var queen = new Queen(0, 0);
        var otherQueen = new Queen(1, 1);
        
        var canCapture = queen.checkRelationshipWith(otherQueen);

        expect(canCapture).toBe(I.CAN_CAPTURE)
    })

    it("should be able to capture a piece that is on the same diagonal starting when sat at 1, 2", () => {
        var queen = new Queen(1, 2);
        var otherQueen = new Queen(2, 3);
        
        var canCapture = queen.checkRelationshipWith(otherQueen);

        expect(canCapture).toBe(I.CAN_CAPTURE)
    })
})