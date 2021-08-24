class PeekingIterator {
    constructor(iterator) {
        this.iterator = iterator
        this.indexpeek = 0
        this.indexnext = 0
    }

    peek() {
        this.indexpeek != this.indexnext && (this.indexpeek = this.indexnext)
        if (this.iterator.length > 0 && this.indexpeek <= this.iterator.length) {
            return this.iterator[this.indexpeek++]
        }
    }

    next() {
        if (this.iterator.length > 0 && this.indexnext <= this.iterator.length) {
            return this.iterator[this.indexnext++]
        }
    }

    hasNext() {
        return this.iterator.length != this.indexnext
    }
}

var obj = new PeekingIterator([1,2,3])
var param_0 = obj.next()
var param_1 = obj.peek()
var param_2 = obj.peek()
var param_3 = obj.next()
var param_4 = obj.next()
var param_5 = obj.hasNext()
console.log(param_0, param_1, param_2, param_3, param_4,  param_5)
