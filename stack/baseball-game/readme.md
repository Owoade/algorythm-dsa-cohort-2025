# Baseball Game Scoring Problem

## Problem Description

You are keeping the scores for a baseball game with special rules. At the beginning of the game, you start with an **empty record**.

You are given a list of strings `operations`, where `operations[i]` is the i-th operation you must apply to the record. Each operation is one of the following:

- **An integer `x`**  
  Record a new score of `x`.

- **"+"**  
  Record a new score that is the **sum of the previous two scores**.

- **"D"**  
  Record a new score that is **double the previous score**.

- **"C"**  
  Invalidate the **previous score**, removing it from the record.

You must return the **sum of all the scores** after applying all operations.

The test cases are generated such that:
- The answer and all intermediate calculations fit in a **32-bit integer**.
- All operations are **valid**.

---

## Examples

### Example 1
**Input:**  
ops = ["5","2","C","D","+"]
**Output:**  
30
**Explanation:**  
- `"5"` → [5]  
- `"2"` → [5, 2]  
- `"C"` → [5]  
- `"D"` → [5, 10]  
- `"+"` → [5, 10, 15]  
**Sum:** 5 + 10 + 15 = **30**

---

### Example 2
**Input:**  
ops = ["5","-2","4","C","D","9","+","+"]
**Output:**  
27
**Explanation:**  
- `"5"` → [5]  
- `"-2"` → [5, -2]  
- `"4"` → [5, -2, 4]  
- `"C"` → [5, -2]  
- `"D"` → [5, -2, -4]  
- `"9"` → [5, -2, -4, 9]  
- `"+"` → [5, -2, -4, 9, 5]  
- `"+"` → [5, -2, -4, 9, 5, 14]  
**Sum:** 5 + (-2) + (-4) + 9 + 5 + 14 = **27**

---

### Example 3
**Input:**  
ops = ["1","C"]
**Output:**  
0

**Explanation:**  
- `"1"` → [1]  
- `"C"` → []  
**Sum:** 0

---

## Constraints
- `1 <= operations.length <= 1000`
- `operations[i]` is `"C"`, `"D"`, `"+"`, or a string representing an integer in the range **[-30000, 30000]**.
- For `"+"` operation: there will always be at least **two** previous scores.
- For `"C"` and `"D"` operations: there will always be at least **one** previous score.
