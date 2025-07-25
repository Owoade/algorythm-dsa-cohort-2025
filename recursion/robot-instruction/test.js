import robot_instruction from "./index.js";
import assert from "assert";

assert.strictEqual(robot_instruction("LL"), "LL");
assert.strictEqual(robot_instruction("2LR"), "LRR");
assert.strictEqual(robot_instruction("2L"), "L");
assert.strictEqual(robot_instruction("22LR"), "LRRLR");
assert.strictEqual(robot_instruction("LL2R2L"), "LLRLL");
assert.strictEqual(robot_instruction("2RL"), "RLL");
assert.strictEqual(robot_instruction("L2R2L"), "LRLL");
assert.strictEqual(robot_instruction("2L2R"), "LRR");
assert.strictEqual(robot_instruction("2L2RL"), "LRLLRLL");
assert.strictEqual(robot_instruction("2L2R2L"), "LRLLRLL");
assert.strictEqual(robot_instruction(""), "");

console.log("✅ All test cases passed!");


