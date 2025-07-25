# Problem 1: Robot Instructions

We are given a string, `seq`, with a sequence of instructions for a robot. The string consists of characters `'L'`, `'R'`, and `'2'`. The letters `'L'` and `'R'` instruct the robot to move left or right. The character `'2'` (which never appears at the end of the string) means "perform all the instructions after this `'2'` twice, but skip the instruction immediately following the `'2'` during the second repetition." Output a string with the final list of left and right moves that the robot should do.

---

**Example: seq = "LL"**  
Output: `"LL"`

---

**Example: seq = "2LR"**  
Output: `"LRR"`. The `'2'` indicates that we need to do `"LR"` first and then `"R"`.

---

**Example: seq = "2L"**  
Output: `"L"`. The `'2'` indicates that we need to do `"L"` first and then `""` (the empty string).

---

**Example: seq = "22LR"**  
Output: `"LRRLR"`. The first `'2'` indicates that we need to do `"2LR"` first and then `"LR"`.

---

**Example: seq = "LL2R2L"**  
Output: `"LLRLL"`
