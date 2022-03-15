function reverseKGroup( head ,  k ) {
    if (head == null || head.next == null) return head
    let len = getLength(head)
    if (len < k) {
        return head
    } else { 
        let n1 = null, n2 = null;
        for (let i = 1; i <= k; i++) { 
            n1 = head.next;
            head.next = n2;
            n2 = head;
            head = n1;
        }
        let lastNode = findLast(n2)
        lastNode.next = reverseKGroup(head, k)
        return n2
    }
    
}
function findLast(node) { 
    let lastNode = node
    while(lastNode.next) {
        lastNode = lastNode.next
    }
    return lastNode
}
function getLength(node) {  
    let len = 1;
    while (node != null) { 
        node = node.next
        len += 1
    }
    return len
}