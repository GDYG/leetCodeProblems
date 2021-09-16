function myNew(curr) {
    if (typeof curr !== 'function') {
        return 'Input not is a Function!'
    }

    let args = Array.from(arguments).slice(1)
    let obj = new Object()
    obj.__proto__ = curr.prototype
    let ret = curr.apply(obj, args)
    let isObject = Object.prototype.toString.call(ret) === "[object, Object]" || Object.prototype.toString.call(ret) === "[object, Function]"

    return isObject ? ret : obj
}

function Car(a) {
    this.age = a
}

let obj = myNew(Car, 18)

console.log(obj.age)

