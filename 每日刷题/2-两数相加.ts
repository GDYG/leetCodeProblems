// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

function addTwoNumbers(l1: number[], l2: number[]): number[] {
    let l3: number[] = []
    if (l1.length > l2.length) {
        l2 = l1.map((v, i) => {
            return l2[i] ? l2[i] : 0
        })
    } else if (l1.length < l2.length) {
        l1 = l2.map((v, i) => {
            return l1[i] ? l1[i] : 0
        }) 
    }
    l3 = l1.map((v, i) => {
        if (v + l2[i] >= 10) {
            l1[i + 1] += 1
            return (v + l2[i]) % 10
        } else {
            return v + l2[i]
        }
    })
    return l3
};

console.log(addTwoNumbers([1,3,5,7],[2,5,8]))