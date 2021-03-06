function EntryNodeOfLoop(pHead)
{
    let map = new Set()
    while (pHead) {
        if(pHead == null) return null
        if (map.has(pHead)) { 
            return pHead
        }
        map.add(pHead)
        pHead = pHead.next
    }
    return null
}