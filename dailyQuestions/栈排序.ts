class SortedStacks {
    stack: number[]
    constructor() {
        this.stack = []
    }

    push(val): void {
        const top = this.peek()
        if (!this.isEmpty() && val > top) {
            this.pop()
            this.push(val)
            this.push(top)
        } else {
            this.stack.push(val)
        }
    }

    peek(): number {
        return this.stack[this.stack.length - 1]
    }

    pop(): void {
        this.stack.pop()
    }

    isEmpty(): boolean {
        return this.stack.length === 0
    }
}

let newStack = new SortedStacks()
console.log(newStack.push(1), newStack.push(2), newStack.peek(), newStack.pop(), newStack.peek())