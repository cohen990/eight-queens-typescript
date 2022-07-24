import { Coordinates } from "./coordinates";
import { I, Queen } from "./queen";
import { RandomQueenPlacer } from "./queenPlacer";

describe("when seeding the random queen placer", () => {
    it("should always return the same queen", () => {
        var placer = new RandomQueenPlacer("seed");
        var expectedQueen = new Queen(4, 6)

        var queen = placer.placeQueen([]);

        expect(queen.checkRelationshipWith(expectedQueen)).toBe(I.AM_THE_SAME_PIECE)
    })
})

describe("When unable to find a valid location for a queen", () => {
    it("should not return a queen", () => {
        var placer = new RandomQueenPlacer();
        var queens = [
            new Queen(0, 0),
            new Queen(1, 1),
            new Queen(2, 2),
            new Queen(3, 3),
            new Queen(4, 4),
            new Queen(5, 5),
            new Queen(6, 6),
            new Queen(7, 7),
        ]

        var queen = placer.placeQueen(queens)
        expect(queen).toBeUndefined()
    })
})

describe("When provided a list of previously tried placements", () => {
    it("should not suggest that placement", () => {
        var placer = new RandomQueenPlacer("seed");
        var shouldntBe = new Coordinates(4, 6)
        var priorAttempts = [shouldntBe.toString()]

        var queen = placer.placeQueen([], priorAttempts)
        expect(queen.position.equals(shouldntBe)).toBe(false)
    })
})
