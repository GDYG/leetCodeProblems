function checkStraightLine(coordinates: number[][]): boolean {
    let k: number, b: number;
    if (coordinates.length <= 2) return true;
    let x:number = 0
    let y:number = 0
    coordinates.forEach((item) => {
        x += item[0]
        y += item[1]
    })
    if (x == 0 || y == 0) return true
    k = (coordinates[1][1] - coordinates[0][1]) / (coordinates[0][1] - coordinates[0][0])
    b = coordinates[0][1] - (k * coordinates[0][0])
    coordinates.forEach((v, i) => {
        if (v[1] !== (k * v[0] + b)) {
            return false
        }
    })
    return true
};

console.log(checkStraightLine([[0,0],[0,1],[0,-1]]))