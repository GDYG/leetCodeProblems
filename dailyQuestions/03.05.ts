
class SortedStack {
    stack: number[]
    constructor() {
        this.stack = []
    }

    push(val: number): void {
        if (!this.isEmpty() && (val > this.peek())) {
            let min: number = this.stack.pop()
            this.push(val)
            this.push(min)
        } else {
            this.stack.push(val)
        }
    }

    pop(): void {
        this.stack.pop()
    }

    peek(): number {
        return this.isEmpty() ? -1 : this.stack[this.stack.length - 1]
    }

    isEmpty(): boolean {
        return this.stack.length === 0
    }
}

let stack = new SortedStack()

let a = stack.peek()

console.log(stack, a)
