
    // My better solution apparently
    var sortColors = function(nums) {
        for (let end = nums.length; end >= 0; end--) {
            let sorted = true
            for (let i = 0; i < end; i++) {
                if (nums[i] > nums[i + 1]) {
                    sorted = false
                    let temp = nums[i]
                    nums[i] = nums[i + 1]
                    nums[i + 1] = temp
                }
            }
            if (sorted === true) {
                break
            }
        }
    };
