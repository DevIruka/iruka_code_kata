function solution(num) {
    let answer = 0;
    if (num !== 1) {
        for (let index = 1; index <= 500; index++) {
            if (num % 2 === 0) {
                num = num / 2;
            } else if (num % 2 !== 0) {
                num = num * 3 + 1;
            }

            if (num === 1) {
                answer += index;
                return answer;
            }
        }
        if (num !== 1) {
            return (answer = -1);
        }
    } else {
        return answer = 0
    }
}