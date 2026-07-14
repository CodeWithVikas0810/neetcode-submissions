/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (head == null || head.next == null) {
            return head
        }
        let current = head
        let previous = null
        let next = current.next

        while (current != null) {
            next = current.next
            current.next = previous
            previous = current
            current = next
        }
        return previous

    }
}
