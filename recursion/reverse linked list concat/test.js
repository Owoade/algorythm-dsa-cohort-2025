import assert from "assert";
import reverse_linked_list_concat from "./index.js";

// Definition for singly-linked list.
class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }

// Helper function to build a linked list from an array
function buildLinkedList(values) {
    if (!values.length) return null;
    let head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
      current.next = new ListNode(values[i]);
      current = current.next;
    }
    return head;
}


// Test cases
(function testReverseLinkedListConcat() {
    // Test 1: Basic case
    let head1 = buildLinkedList([1, 2, 3]);
    assert.strictEqual(reverse_linked_list_concat(head1), "321");
  
    // Test 2: Mixed digits
    let head2 = buildLinkedList([7, 0, 4, 9]);
    assert.strictEqual(reverse_linked_list_concat(head2), "9407");
  
    // Test 3: Single node
    let head3 = buildLinkedList([5]);
    assert.strictEqual(reverse_linked_list_concat(head3), "5");
  
    // Test 4: With leading zeros
    let head4 = buildLinkedList([0, 0, 3]);
    assert.strictEqual(reverse_linked_list_concat(head4), "300");
  
    // Test 5: Larger numbers
    let head5 = buildLinkedList([12, 34, 56]);
    assert.strictEqual(reverse_linked_list_concat(head5), "563412");
  
    console.log("All tests passed.");
})();