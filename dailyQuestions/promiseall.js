Promise.all = function (promises) { 
    let results = []
    let promiseNumber = 0;
    return new Promise((resolve, reject) => {
        for (let val of promises) { 
            Promise.resolve(val).then(res => { 
                promiseNumber++;
                results.push(res)
                //全部正确才返回结果
                if (promiseNumber === promises.length) { 
                    resolve(results)
                }
            }, err => { 
                reject(err)
            })
        }
    })
}

let promise1 = new Promise((resolve, reject) => { 
    reject(1)
})
let promise2 = new Promise(resolve => { 
    resolve(2)
})
let promise3 = new Promise(resolve => { 
    resolve(3)
})

let ret = Promise.all([promise1, promise2, promise3])
ret.then(res => { 
    console.log(res)
}, err => console.log(err))