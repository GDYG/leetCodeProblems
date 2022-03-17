function removeNthFromEnd(head, n) {
    let p1 = head;
    let p2 = head;

    for (let i = 0; i < n; i++) { 
        p1 = p1.next
        if(p1 == null) return head.next
    }

    while (p1) { 
        p1 = p1.next;
        p2 = p2.next;
    }
    p2.next = p2.next.next;
    return head
}