function maxProfit( prices ) {
    let len = prices.length
    if (len < 1) return 0
    let max = 0
    let min = prices[0]
    for (let i = 1; i < len - 1; i++) { 
        min = Math.min(prices[i], min)
        max = (prices[i + 1] - min, max)
    }
    return max
}