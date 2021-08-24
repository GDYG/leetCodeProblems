var permute = function(nums) {
    var target = [];
    recursive(nums, [], target, 0);
    return target;
};

function recursive(nums, tmp, target, deep){
    if(deep === nums.length) {
        target.push([...tmp]);
        return 0;
    }
    for(let i=0; i<nums.length; ++i) {
        if(tmp.includes(nums[i])) continue;
        tmp.push(nums[i]);
        recursive(nums, tmp, target, deep+1);
        tmp.pop();
    }
}




