function divingBoard(shorter: number, longer: number, k: number): number[] {
    if(k==0) return []
    let shortLen: number, longLen: number, nums: number[] = [];
    for (let i = 0; i <= k; i++) {
        shortLen = i
        longLen = k - shortLen
        nums.push((shorter * shortLen) + (longer * longLen))
    }
    return Array.from(new Set(nums)).sort((a, b) => a - b)
};

console.log(divingBoard(2
    ,1118596
    ,979))