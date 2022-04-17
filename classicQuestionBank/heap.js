function isStr(s) {  
    let len = s.length
    if (len & 1) return false
    
    let res = []

    for (let i = 0; i < len; i++) { 
        let str = s.charAt(i)
        if (str == "{" || str == "[" || str == "(") {
            res.push(str)
        } else { 
            let temp = res.pop()
            if (str == ")" && temp != '(') return false;
            if (str == "}" && temp != "{") return false;
            if (str == "]" && temp != "[") return false;
        }
    }
    return res.length === 0
}

console.log(isStr('({[]})'))