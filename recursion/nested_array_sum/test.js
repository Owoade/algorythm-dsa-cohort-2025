import nested_array_sum from "./index.js";
import assert from "assert";

// 1. Flat array
assert.strictEqual(nested_array_sum([1, 2, 3]), 6);

// 2. Single level nesting
assert.strictEqual(nested_array_sum([1, [2, 3]]), 6);

// 3. Nested twice
assert.strictEqual(nested_array_sum([1, [[2], 3]]), 6);

// 4. Deep nesting
assert.strictEqual(nested_array_sum([[[[1]], 2], [3, [4]], 5]), 15);

// 5. Empty array
assert.strictEqual(nested_array_sum([]), 0);

// 6. Only empty nested arrays
assert.strictEqual(nested_array_sum([[], [[]], [[[[]]]]]), 0);

// 7. Deep chain
assert.strictEqual(nested_array_sum([1, [2, [3, [4]]]]), 10);

// 8. Larger mix
assert.strictEqual(nested_array_sum([[[[5]]], [6], [[7, 8], 9]]), 35);

// 9. All in one deep array
assert.strictEqual(nested_array_sum([[[[[[1, 1, 1]]]]]]), 3);

// 10. Mixed nesting levels
assert.strictEqual(nested_array_sum([[1, 2], 3, [[4, [5]]]]), 15);

console.log("✅ All test cases passed!");