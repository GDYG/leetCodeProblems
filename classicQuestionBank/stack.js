class Node {
    constructor(val) {
        this.value = val
        this.next = null
        this.prev = null
    }
}

class Stack {
    constructor() {
        this.head = new Node('head')
        this.length = 0
    }

    findLast() {
        let current = this.head
        while (current.next) {
            current = current.next
        }
        return current
    }

    append(ele) {
        let current = this.findLast()
        current.next = new Node(ele)
        this.length++
    }

    clear() {
        this.head.next = null
        this.length = 0
    }

    find(val) {
        let current = this.head
        while (current && current.value !== val) {
            current = current.next
        }
        return current
    }

    insert(item, val) {
        let current = this.find(item)
        if (!current) return

        let node = new Node(val)
        node.next = current.next
        current.next = node
    }

    getLength() {
        return this.length
    }
}

let mylist = new Stack()
let arr = [2, 3, 4, 5, 6, 7, 8, 9]
for (let i of arr) {
    mylist.append(i)
}

console.log(mylist)
console.log(mylist.find(3))
console.log(mylist.findLast())
console.log(mylist.getLength())



