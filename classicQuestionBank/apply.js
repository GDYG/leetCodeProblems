var obj = { a: 2 }
var funct = function (b, c) { console.log(this.a, b, c)}

Function.prototype._apply = function (base, arg) {
    base = base || window
    base.fn = this
    base.fn(...arg)
    delete base.fn
}

Function.prototype._call = function (base, ...arg) {
    base = base || window
    base.fn = this
    base.fn(...arg)
    delete base.fn
}

Function.prototype._bind = function (base, ...arg) {
    return (...args) => {
        base = base || window
        base.fn = this
        base.fn(...arg, ...args)
        delete base.fn
    }
}

funct._apply(obj, [3, 4])












