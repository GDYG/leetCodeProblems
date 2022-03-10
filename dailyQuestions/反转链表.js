/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    if (pHead == null || pHead.next == null) return pHead

    let n1 = null, n2 = null;
    while (pHead != null) {
        n1 = pHead.next
        pHead.next = n2
        n2 = pHead
        pHead = n1
    }
    return n2
}
module.exports = {
    ReverseList : ReverseList
};