function intToRoman(num: number) {
    let arr:string = ''
    if (num >= 1 && num < 5) {
        if (num === 4) {
            return 'IV'
        } else {
            if (num > 1) {
                arr += 'I'
                return arr + intToRoman(num - 1)
            } else {
                return "I"
            }
        }
    } else if (num >= 5 && num < 10) {
        if (num === 9) {
            return 'IX'
        } if (num === 5) {
            return "V"
        } if (num > 9) {
            arr += "IX"
            return arr + intToRoman(num - 9)
        } else {
            if (num > 5) {
                arr += 'V'
                return arr + intToRoman(num - 5)
            }
        }
    } else if (num >= 10 && num < 50) {
        if (num === 40) {
            return 'XL'
        } if (num === 10) {
            return "X"
        } if (num > 40) {
            arr += "XL"
            return arr + intToRoman(num - 40)
        } else {
            if (num > 10) {
                arr += 'X'
                return arr + intToRoman(num - 10)
            }
        }
    } else if (num >= 50 && num < 100) {
        if (num === 90) {
            return 'XC'
        } if (num === 50) {
            return "L"
        } if (num > 90) {
            arr += "XC"
            return arr + intToRoman(num - 90)
        } else {
            if (num > 50) {
                arr += 'L'
                return arr + intToRoman(num - 50)
            }
        }
    } else if (num >= 100 && num < 500) {
        if (num === 400) {
            return 'CD'
        } if (num === 100) {
            return "C"
        } if (num > 400) {
            arr += "CD"
            return arr + intToRoman(num - 400)
        } else {
            if (num > 100) {
                arr += "C"
                return arr + intToRoman(num - 100)
            }
        }
    } else if (num >= 500 && num < 1000) {
        if (num === 900) {
            return 'CM'
        } if (num === 500) {
            return "D"
        } if (num > 900) {
            arr += "CM"
            return arr + intToRoman(num - 900)
        } else {
            if (num > 500) {
                arr += "D"
                return arr + intToRoman(num - 500)
            }
        }
    } else if (num >= 1000 && num <= 3999) {
        if (num === 1000) {
            return 'M'
        } else {
            if (num > 500) {
                arr += "M"
                return arr + intToRoman(num - 1000)
            }
        }
    } else {
        console.log('输入错误!')
    }
};