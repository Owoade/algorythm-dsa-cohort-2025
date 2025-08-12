import assert from "assert";
import base_ball_game from "./index.js";

// Test Case 1 - Example 1
assert.strictEqual(
    base_ball_game(["5","2","C","D","+"]),
    30,
    "Example 1 should return 30"
);

// Test Case 2 - Example 2
assert.strictEqual(
    base_ball_game(["5","-2","4","C","D","9","+","+"]),
    27,
    "Example 2 should return 27"
);

// Test Case 3 - Example 3
assert.strictEqual(
    base_ball_game(["1","C"]),
    0,
    "Example 3 should return 0"
);

// Additional Test Case 4 - All doubles
assert.strictEqual(
    base_ball_game(["3","D","D","D"]),
    3 + 6 + 12 + 24,
    "Doubling repeatedly should be correct"
);

// Additional Test Case 5 - All sums
assert.strictEqual(
    base_ball_game(["5","10","+","+"]),
    5 + 10 + 15 + 25,
    "Summing previous two scores repeatedly should be correct"
);

// Additional Test Case 6 - Mixed positives and negatives
assert.strictEqual(
    base_ball_game(["10","-5","D","+","C"]),
    10 + (-5) + (-10) + 0,
    "Negative numbers and mix operations should be correct"
);

// Additional Test Case 7 - Single score
assert.strictEqual(
    base_ball_game(["7"]),
    7,
    "Single score should return that score"
);

// Additional Test Case 8 - Large range check
assert.strictEqual(
    base_ball_game(["30000","D","C","-30000"]),
    30000 + 60000 - 60000 - 30000,
    "Large integer range should be handled correctly"
);

console.log("All tests passed! ✅");
