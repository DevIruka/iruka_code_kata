function solution(nums) {
    let answer = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                let boolean;
                for (let divisor = 2; divisor <= sum - 1; divisor++) {
                    if (sum % divisor === 0) {
                        boolean = false;
                        break;
                    }
                    boolean = true;
                }
                if (boolean) {
                    answer += 1;
                }
            }
        }
    }
    return answer;
}