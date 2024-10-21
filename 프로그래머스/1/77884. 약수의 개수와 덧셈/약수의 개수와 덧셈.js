function solution(left, right) {
    let answer = 0;
    let firstArray = [];
    for (let i = left; i <= right; i++) {
        firstArray.push(i);
    }
    let answerArray = firstArray.map((items) => {
        let numofDivisor = 0;
        for (let num = 1; num <= items; num++) {
            if (items % num === 0) {
                numofDivisor += 1;
            }
        }
        if (numofDivisor % 2 !== 0) {
            return items * -1;
        } else {
            return items;
        }
    });
    answerArray.forEach(numsofDivisor => {
        answer += numsofDivisor
    });
    return answer
}

solution(13, 17);
