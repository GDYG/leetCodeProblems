function isValid(s) {
    let len = s.length
    if(len & 1) return false
    let arr = s.split('')
    let map = new Map([
        ["{","}"],
        ["[","]"],
        ["(",")"],
        ["}","{"],
        ["]","["],
        [")","("]
    ])
    let stack = []
    for (let i = 0; i < len; i++) { 
        if (stack.length && stack[stack.length - 1] == map.get(arr[i])) { 
            stack.pop()
        } else {
            stack.push(arr[i])
        }
    }
    return stack.length ? false : true
}


console.log(isValid('{}()[]'))