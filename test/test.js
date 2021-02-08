var assert = require("assert");
var isStraight = require("../app");

describe("Straight validation for a cards list", () => {
    it("[] should fail",() => {
        assert.strictEqual(isStraight([]), false);
    });

    it("[1,2,4,5] should fail",() => {
        assert.strictEqual(isStraight([1,2,4,5]), false);
    });

    it("[1,2,3,4,5,6,7,8] should fail",() => {
        assert.strictEqual(isStraight([1,2,3,4,5,6,7,8]), false);
    })

    it("[2,3,4,5,6] should pass", () => {
        assert.strictEqual(isStraight([2,3,4,5,6]), true);
    })

    it("[2,3,4,5,7] should fail", () => {
        assert.strictEqual(isStraight([2,3,4,5,7]), false);
    })

    it("[6,3,4,5,2] should pass", () => {
        assert.strictEqual(isStraight([6,3,4,5,2]), true);
    })

    it("[2,7,4,5,3] should fail", () => {
        assert.strictEqual(isStraight([2,7,4,5,3]), false);
    })

    it("[2,3,4,5,14] should pass", () => {
        assert.strictEqual(isStraight([2,3,4,5,14]), true);
    })

    it("[10,11,12,13,14] should pass", () => {
        assert.strictEqual(isStraight([10,11,12,13,14]), true);
    })
    it("[2,5,10,11,12,13,14] should pass", () => {
        assert.strictEqual(isStraight([2,5,10,11,12,13,14]), true);
    })
    it("[2,3,4,5,12,13,14] should pass", () => {
        assert.strictEqual(isStraight([2,3,4,5,12,13,14]), true);
    })

    it("[2,5,7,9,11,13,14] should pass", () => {
        assert.strictEqual(isStraight([2,5,7,9,11,13,14]), true);
    })
    it("[14, 5, 4 ,2, 3] should pass", () => {
        assert.strictEqual(isStraight([14, 5, 4 ,2, 3]), true);
    })

    it("[7, 7, 12 ,11, 3, 4, 14] should fail", () => {
        assert.strictEqual(isStraight([7, 7, 12 ,11, 3, 4, 14]), false);
    })
})