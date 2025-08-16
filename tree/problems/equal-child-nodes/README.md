# Equal Child Nodes in a Tree

## Problem Description
You are given a tree with **distinct nodes** (each node contains a unique value). Your task is to **return an array of every parent node** where **its immediate child nodes are "equal"**.  

Two child nodes are considered **equal** if **either**:
1. They have the **same value**, or  
2. The **sum of values in their respective subtrees** is equal.

A **parent node** is any node that has at least two child nodes.

---

## Example  

### Input Tree:
     5
    / \
   3   7
  / \   \
2     1  4

### Explanation:
- Parent node `3` has children `2` and `1` → Their **values are not equal** but their **subtree sums are** (`2` and `1` are not equal, so it fails).
- Parent node `5` has children `3` and `7` → Their **values are different**, and their **subtree sums** are also different → Not included.
- Parent node `7` has only one child (`4`) → Not considered.

In this example, no parent nodes meet the criteria, so the output would be: []

## Example 2  

### Input Tree:
        10
       /  \
      4    6
     / \  / \
    2   2 3  3

- This example yields [4,6]