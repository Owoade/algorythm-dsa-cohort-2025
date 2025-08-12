import assert from "assert";
import valid_parenthesis from "./index.js";

// Example test cases
assert.strictEqual(valid_parenthesis("()"), true, "Single pair of parentheses should be valid");
assert.strictEqual(valid_parenthesis("()[]{}"), true, "Multiple types of brackets in correct order should be valid");
assert.strictEqual(valid_parenthesis("(]"), false, "Mismatched brackets should be invalid");
assert.strictEqual(valid_parenthesis("([)]"), false, "Brackets closed in the wrong order should be invalid");
assert.strictEqual(valid_parenthesis("{[]}"), true, "Nested brackets should be valid");
assert.strictEqual(valid_parenthesis(""), true, "Empty string should be valid");
assert.strictEqual(valid_parenthesis("(((((((((())))))))))"), true, "Deeply nested valid brackets should be valid");
assert.strictEqual(valid_parenthesis("("), false, "Single opening bracket should be invalid");
assert.strictEqual(valid_parenthesis("]"), false, "Single closing bracket should be invalid");
assert.strictEqual(valid_parenthesis("[({})]"), true, "Correctly nested mixed brackets should be valid");
assert.strictEqual(valid_parenthesis("[({)}]"), false, "Incorrectly nested mixed brackets should be invalid");

console.log("All tests passed! ✅");