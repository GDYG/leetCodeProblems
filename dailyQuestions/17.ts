function minWindow(s: string, t: string): string {
    if (s.length < t.length) return ""
    let s2 = t.split('')
    let minIndex, maxIndex, lastIndexMin, lastIndexMax;
    s2.forEach((item) => {
        if (minIndex !== undefined) {
            if (minIndex > s.indexOf(item)) {
                minIndex = s.indexOf(item)
            }
        } else {
            minIndex = s.indexOf(item)
        }
        if (maxIndex !== undefined) {
            if (maxIndex < s.indexOf(item)) {
                maxIndex = s.indexOf(item)
            }
        } else {
            maxIndex = s.indexOf(item)
        }
    })
    s2.forEach((item) => {
        if (lastIndexMin !== undefined) {
            if (lastIndexMin > s.lastIndexOf(item)) {
                lastIndexMin = s.lastIndexOf(item)
            }
        } else {
            lastIndexMin = s.lastIndexOf(item)
        }
        if (lastIndexMax !== undefined) {
            if (lastIndexMax < s.lastIndexOf(item)) {
                lastIndexMax = s.lastIndexOf(item)
            }
        } else {
            lastIndexMax = s.lastIndexOf(item)
        }
    })
    if (minIndex === -1 || maxIndex === -1) return ""
    if (lastIndexMin === -1 || lastIndexMax === -1) return ""
    let flag = (lastIndexMax - lastIndexMin) - (maxIndex - minIndex)
    if((lastIndexMax - lastIndexMin) - (maxIndex - minIndex) === 0) return s.slice(minIndex, lastIndexMax+1)
    return flag >= 0 ? s.slice(minIndex, maxIndex+1) : s.slice(lastIndexMin, lastIndexMax+1)
};

console.log(minWindow("aab", "aab"))

