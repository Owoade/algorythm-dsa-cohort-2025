# Valid Parenthesis Problem

The **Valid Parenthesis Problem** is a common coding interview question that tests understanding of stack-based algorithms and string parsing.

## Problem Statement
Given a string `s` containing only the characters:
- `(`, `)`, `{`, `}`, `[`, `]`

Determine if the input string is **valid**.

A string is considered valid if:
1. Every opening bracket has a corresponding closing bracket of the same type.
2. Brackets close in the correct order.
3. An empty string is considered valid.

## Examples

### Example 1:
**Input:**  
s = "()"
**Output:**
true

### Example 2:
**Input:**  
s = "()[]{}"
**Output:**  
true


### Example 3:
**Input:**  
s = "()[]{}"
**Output:**  
false

## Constraints
- `1 <= s.length <= 10⁴`
- `s` consists only of `'('`, `')'`, `'{'`, `'}'`, `'['`, `']'`.

## Approach
A common approach is to use a **stack**:
1. Traverse each character in the string.
2. If it’s an opening bracket (`(`, `{`, `[`), push it to the stack.
3. If it’s a closing bracket, check if the stack is not empty **and** the top of the stack is the matching opening bracket.
4. If it doesn’t match or the stack is empty, return `false`.
5. After traversal, if the stack is empty, return `true`; otherwise, return `false`.

## Time Complexity
- **O(n)** — where `n` is the length of the string (each character is processed once).

## Space Complexity
- **O(n)** in the worst case (when all characters are opening brackets).
