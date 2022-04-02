function mergeKLists(lists) {
    let len = lists.length
    if (len == 1) return lists[0]
    if(len < 1) return null
    let mid = Math.floor(len / 2)
    let left = lists.slice(0, mid)
    let right = lists.slice(mid)
    return merge(mergeKLists(left), mergeKLists(right))
}
function merge(p1, p2) { 
    if(p1 == null) return p2
    if (p2 == null) return p1
    
    if (p1.val < p2.val) {
        p1.next = merge(p1.next, p2)
        return p1
    } else { 
        p2.next = merge(p1, p2.next)
        return p2
    }
}