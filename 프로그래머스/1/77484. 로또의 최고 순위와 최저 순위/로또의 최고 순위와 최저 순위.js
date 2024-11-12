function solution(lottos, win_nums) {
    const answer = [];
    let rightNum = 0;
    let countZero = 0;
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) countZero++;
        if (win_nums.includes(lottos[i])) rightNum++;
    }
    const helper = (number) => {
        switch (number) {
            case 6:
                answer.push(1);
                break;
            case 5:
                answer.push(2);
                break;
            case 4:
                answer.push(3);
                break;
            case 3:
                answer.push(4);
                break;
            case 2:
                answer.push(5);
                break;
            default:
                answer.push(6);
                break;
        }
    };
    helper(countZero + rightNum);
    helper(rightNum);
    return answer;
}