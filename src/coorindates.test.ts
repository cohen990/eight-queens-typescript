import { Coordinates } from "./coordinates"

describe("when comparing coordinates", () => {
    it("should recognise two coordinates as equal if x and y matches", () => {
        var first = new Coordinates(1, 2);
        var second = new Coordinates(1, 2);

        expect(first.equals(second)).toBe(true);
    })

    it("should recognise two coordinates as not equal if x doesnt match", () => {
        var first = new Coordinates(1, 2);
        var second = new Coordinates(2, 2);

        expect(first.equals(second)).toBe(false);
    })

    it("should recognise two coordinates as not equal if y doesnt match", () => {
        var first = new Coordinates(1, 2);
        var second = new Coordinates(1, 3);

        expect(first.equals(second)).toBe(false);
    })
})