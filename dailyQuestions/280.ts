class RandomizedSet {
    arr: number[]
    constructor() {
        this.arr = []
    }

    insert(val: number) {
        let flag = !this.arr.includes(val)
        !this.arr.includes(val) && this.arr.push(val)
        return flag
    }

    remove(val: number) {
        let flag = this.arr.includes(val)
        this.arr.indexOf(val) > -1 && this.arr.splice(this.arr.indexOf(val), 1)
        return flag
    }

    getRandom(): number {
        return this.arr[Math.floor((Math.random()*this.arr.length))]
    }
}

let tab = new RandomizedSet()
tab.insert(1)
tab.insert(2)
tab.insert(3)
tab.getRandom()
console.log(tab.getRandom())