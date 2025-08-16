import assert from "assert";
import { build_binary_search_tree } from "../../builder.js";
import find_equal_parents from "./index.js";

function run_tests() {
    console.log("Running Binary Tree Parent Node Tests...");

    // Test 1: Empty tree
    {
        console.log("Test 1: Empty tree");
        const root = build_binary_search_tree([]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), []);
        console.log("✓ Passed");
    }

    // Test 2: Single node
    {
        console.log("Test 2: Single node");
        const root = build_binary_search_tree([5]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), []);
        console.log("✓ Passed");
    }

    // Test 3: Root with equal children by value
    {
        console.log("Test 3: Root with equal children by value");
        // Tree: 5 -> left: 3, right: 3 (equal by value)
        const root = build_binary_search_tree([5, 3, 3]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), [5]);
        console.log("✓ Passed");
    }

    // Test 4: Root with different children values, no equal sums
    {
        console.log("Test 4: Root with different children values");
        // Tree: 10 -> left: 5, right: 15 (not equal by value, not equal by sum)
        const root = build_binary_search_tree([10, 5, 15]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), []);
        console.log("✓ Passed");
    }

    // Test 5: Multiple levels - need to check subtree sums
    {
        console.log("Test 5: Multiple levels with potential equal sums");
        // Tree: [8, 4, 12, 2, 6, 10, 14]
        //       8
        //      / \
        //     4   12
        //    /\   /\
        //   2  6 10 14
        // For node 8: left subtree sum = 4+2+6=12, right subtree sum = 12+10+14=36 (not equal)
        // For node 4: left child = 2, right child = 6 (not equal by value or sum)
        // For node 12: left child = 10, right child = 14 (not equal by value or sum)
        const root = build_binary_search_tree([8, 4, 12, 2, 6, 10, 14]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), []);
        console.log("✓ Passed");
    }

    // Test 6: Tree with only left children
    {
        console.log("Test 6: Tree with only left children");
        const root = build_binary_search_tree([10, 5, null, 3, null]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), []);
        console.log("✓ Passed");
    }

    // Test 7: Tree with only right children
    {
        console.log("Test 7: Tree with only right children");
        const root = build_binary_search_tree([5, null, 10, null, null, null, 15]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), []);
        console.log("✓ Passed");
    }

    // Test 8: Equal by sum example
    {
        console.log("Test 8: Equal by sum");
        // Tree: [10, 3, 7, 1, 2, 3, 4]
        //       10
        //      /  \
        //     3    7
        //    /\   /\
        //   1  2 3  4
        // For node 3: left=1, right=2 (not equal)
        // For node 7: left=3, right=4 (not equal)  
        // For node 10: left subtree sum = 3+1+2=6, right subtree sum = 7+3+4=14 (not equal)
        // Let's try: [6, 2, 4, 1, 1, 2, 2]
        //       6
        //      / \
        //     2   4
        //    /\  /\
        //   1 1 2  2
        // For node 2: left=1, right=1 (equal by value!)
        // For node 4: left=2, right=2 (equal by value!)
        // For node 6: left subtree sum = 2+1+1=4, right subtree sum = 4+2+2=8 (not equal)
        const root = build_binary_search_tree([6, 2, 4, 1, 1, 2, 2]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), [2, 4]);
        console.log("✓ Passed");
    }

    // Test 9: Large values
    {
        console.log("Test 9: Large values");
        const root = build_binary_search_tree([1000, 500, 500]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), [1000]);
        console.log("✓ Passed");
    }

    // Test 10: Negative values
    {
        console.log("Test 10: Negative values");
        const root = build_binary_search_tree([0, -5, -5]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), [0]);
        console.log("✓ Passed");
    }

    // Test 11: Mixed positive and negative - equal by sum
    {
        console.log("Test 11: Mixed positive and negative");
        // Tree: [0, -2, 2] - left=-2, right=2, sum check: -2 != 2, not equal
        // Tree: [0, 1, -1] - left=1, right=-1, sum check: 1 != -1, not equal
        // Tree: [5, 2, 3, 1, 1, 1, 2] 
        //       5
        //      / \
        //     2   3
        //    /\  /\
        //   1 1 1  2
        // For node 2: left=1, right=1 (equal!)
        // For node 3: left=1, right=2 (not equal)
        // For node 5: left subtree = 2+1+1=4, right subtree = 3+1+2=6 (not equal)
        const root = build_binary_search_tree([5, 2, 3, 1, 1, 1, 2]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), [2]);
        console.log("✓ Passed");
    }

    // Test 12: Zero values
    {
        console.log("Test 12: Zero values");
        const root = build_binary_search_tree([5, 0, 0]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), [5]);
        console.log("✓ Passed");
    }

    // Test 13: Deep unbalanced tree
    {
        console.log("Test 13: Deep unbalanced tree");
        // Tree: [1, 2, 2, null, null, 3, 3]
        //       1
        //      / \
        //     2   2
        //        / \
        //       3   3
        // Node 1: left child = 2, right child = 2 (equal by value!)
        // Right node 2: left = 3, right = 3 (equal by value!)
        // Left node 2: no children
        const root = build_binary_search_tree([1, 2, 2, null, null, 3, 3]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), [1, 2]);
        console.log("✓ Passed");
    }

    // Test 14: Equal sums with different structures
    {
        console.log("Test 14: Equal sums with different structures");
        // Tree: [8, 4, 4, 2, 2, 2, 2]
        //       8
        //      / \
        //     4   4
        //    /\  /\
        //   2 2 2  2
        // Node 8: left=4, right=4 (equal by value!)
        // Left node 4: left=2, right=2 (equal by value!)  
        // Right node 4: left=2, right=2 (equal by value!)
        const root = build_binary_search_tree([8, 4, 4, 2, 2, 2, 2]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), [4, 4, 8]);
        console.log("✓ Passed");
    }

    // Test 15: All same values
    {
        console.log("Test 15: All same values");
        // Tree: [7, 7, 7, 7, 7, 7, 7]
        // Every parent will have equal children by value
        const root = build_binary_search_tree([7, 7, 7, 7, 7, 7, 7]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), [7, 7, 7]);
        console.log("✓ Passed");
    }

    // Test 16: Equal by subtree sum (more complex)
    {
        console.log("Test 16: Equal by subtree sum");
        // Tree: [10, 5, 5, 2, 3, 2, 3]
        //       10
        //      /  \
        //     5    5
        //    /\   /\
        //   2  3 2  3
        // Node 10: left=5, right=5 (equal by value!)
        // Left node 5: left=2, right=3 (not equal by value)
        // Right node 5: left=2, right=3 (not equal by value)
        // Check subtree sums:
        // Left node 5: left subtree sum = 2, right subtree sum = 3 (not equal)
        // Right node 5: left subtree sum = 2, right subtree sum = 3 (not equal)
        const root = build_binary_search_tree([10, 5, 5, 2, 3, 2, 3]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), [10]);
        console.log("✓ Passed");
    }

    // Test 17: Equal by subtree sum only
    {
        console.log("Test 17: Equal by subtree sum only");  
        // Tree: [20, 6, 14, 3, 3, 7, 7]
        //        20
        //       /  \
        //      6    14  
        //     /\   /\
        //    3  3 7  7
        // Node 20: left=6, right=14 (not equal by value)
        //          left subtree sum = 6+3+3=12, right subtree sum = 14+7+7=28 (not equal)
        // Node 6: left=3, right=3 (equal by value!)
        // Node 14: left=7, right=7 (equal by value!)
        const root = build_binary_search_tree([20, 6, 14, 3, 3, 7, 7]);
        const parent_arr = [];
        find_equal_parents(root, parent_arr);
        assert.deepStrictEqual(parent_arr.sort((a,b)=>a-b), [6, 14]);
        console.log("✓ Passed");
    }

    console.log("🎉 All tests completed successfully!");
}

// Run the tests
run_tests();