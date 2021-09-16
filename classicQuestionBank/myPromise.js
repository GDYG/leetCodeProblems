class myPromise {
    constructor(fn) {
        this.status = 'PENDING'
        this.value = null
        this.fulfilledCallback = [] //存放成功的异步回调函数
        this.rejectedCallback = [] //存档失败的异步回调函数

        try { // 最好try catch处理一下, 避免报错
            fn && fn(this._resolve.bind(this), this._reject.bind(this)) //确保传入的是一个可执行的函数
        } catch (err) {
            this._reject(err)
        }
    }

    _resolve(val) {
        if (this.status !== 'PENDING') return;
        this.status = 'FULFILLED'
        this.value = val
        this.fulfilledCallback.map(v => v())
    }

    _reject(err) {
        if (this.status !== 'PENDING') return;
        this.status = 'REJECTED'
        this.value = err
        this.rejectedCallback.map(v => v())
    }

    then(onFulfill, onReject) {
        onFulfill = typeof onFulfill === 'function' ? onFulfill : data => data
        onReject = typeof onReject === 'function' ? onReject : err => err
        return new myPromise((resolve, reject) => {
            if (this.status === 'FULFILLED') {
                try {
                    let ret = onFulfill(this.value)
                    if (ret instanceof myPromise) {
                        ret.then(resolve, reject)
                    } else {
                        resolve(ret ? ret : this.value)
                    }
                } catch (err) {
                    reject(err)
                }
            }

            if (this.status === 'REJECTED') {
                try {
                    let ret = onReject(this.value)
                    if (ret instanceof myPromise) {
                        ret.then(resolve, reject)
                    } else {
                        resolve(ret ? ret : this.value)
                    }
                } catch (err) {
                    reject(err)
                }
            }

            if (this.status === 'PENDING') {
                this.fulfilledCallback.push(() => {
                    let ret = onFulfill(this.value)
                    if (ret instanceof myPromise) {
                        ret.then(resolve, reject)
                    } else {
                        resolve(ret ? ret : this.value)
                    }
                })

                this.rejectedCallback.push(() => {
                    let ret = onReject(this.value)
                    if (ret instanceof myPromise) {
                        ret.then(resolve, reject)
                    } else {
                        resolve(ret ? ret : this.value)
                    }
                })
            }
        })
    }
    catch(onReject) {
        this.then(null, onReject)
    }
}

new myPromise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    } catch (err) {
        reject(err)
    }
}).then(ret => {
    console.log(ret)
})