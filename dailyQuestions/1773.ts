function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let num:number = 0
    items.forEach((v, i) => {
       let key = ruleKey == 'type' ? v[0] : ruleKey == 'color' ? v[1] : ruleKey == 'name' ? v[2] : 0
        if (key) {
            if (key == ruleValue) {
                num += 1
            }
        }
    })
    console.log(num)
    return num
};
countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],"type","phone")