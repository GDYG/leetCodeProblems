var permute = function(nums) {
    nums.sort((a, b) => a - b)
    var target = [];
    recursive(nums, [], target);
    return target;
};

function recursive(nums, tmp, target) {
    if (tmp.length === nums.length) {
        target.push([...tmp]);
        return 0;
    }
    for(let i=0; i<nums.length; i++) {
        if (tmp.includes(nums[i])) {
            continue
        };
        tmp.push(nums[i]);
        recursive(nums, tmp, target);
        tmp.pop();
    }

}

const prem = (nums: number[]) => {
    nums.sort((a,b) => a - b)
    let target: number[][] = []
    let path: number[] = []
    const backTracking = (nums, target) => {
        if (path.length === nums.length) {
            target.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (path.includes(nums[i])) continue;
            path.push(nums[i])
            backTracking(nums, target)
            path.pop() 
        }
    }
    backTracking(nums, target)

    return target
}

console.log(prem([1,1,2]))