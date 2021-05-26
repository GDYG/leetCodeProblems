function reachingPoints(sx: number, sy: number, tx: number, ty: number): boolean {
    while (tx >= sx && ty >= sy) {
        if (tx == ty) break;
        if (tx > ty) {
            console.log(tx, ty)
            if (ty > sy) tx %= ty;
            else return (tx - sx) % ty == 0;
        } else {
            if (tx > sx) ty %= tx;
            else return (ty - sy) % tx == 0;
        }
    }
    return (tx == sx && ty == sy);
};

console.log(reachingPoints(1,1,100,5))