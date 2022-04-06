Array.prototype.apply = function (curr) { 
    let arg = Array.from(arguments).slice(1)

    curr = curr || window
    curr.fn = this
    curr.fn(...arg)
    delete curr.fn
}
