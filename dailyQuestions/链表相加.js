function addInList(head1, head2) {
    if (head1 == null) return head2
    if (head2 == null) return head1
    
    let [p1, len1] = reverse(head1)
    let [p2, len2] = reverse(head2)
    bq(p1, len1, p2, len2)
    let res = p2, add = 0;
    while (p1) { 
        let num = res.val + p1.val + add
        add = num >= 10 ? 1 : 0
        res.val = num >= 10 ? num - 10 : num
        p1 = p1.next
        res = res.next
    }
    if (add) { 
        res = new ListNode(1)
    }
    let [ret, len] = reverse(p2)
    return ret
}

function bq(r1, l1, r2, l2) {
    if (l1 < l2) { 
        let n1 = r1;
        while (n1.next) { 
            n1 = n1.next
        }
        for (let i = 0; i < l2 - l1; i++) { 
            n1.next = new ListNode(0)
            n1 = n1.next
        }
    }
    if (l2 < l1) { 
        let n2 = r2;
        while (n2.next) { 
            n2 = n2.next
        }
        for (let i = 0; i < l1 - l2; i++) { 
            n2.next = new ListNode(0)
            n2 = n2.next
        }
    }
}

function reverse(root) { 
    let n1 = null, n2 = null, len = 0;
    while (root) { 
        n1 = root.next
        root.next = n2
        n2 = root
        root = n1
        len++
    }
    return [n2, len]
}