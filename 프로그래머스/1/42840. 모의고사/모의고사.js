function solution(answers) {
    let answer = [];
    const supo1 = [1, 2, 3, 4, 5];
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const supo1score = [];
    const supo2score = [];
    const supo3score = [];

    if (answers.length <= supo1.length) {
        for (i = 0; i < answers.length; i++) {
            if (supo1[i] === answers[i]) {
                supo1score.push(supo1[i]);
            }
            if (supo2[i] === answers[i]) {
                supo2score.push(supo1[i]);
            }
            if (supo3[i] === answers[i]) {
                supo3score.push(supo1[i]);
            }
        }
    }

    if (answers.length > supo1.length) {
        const supo1loop = Math.floor(answers.length / supo1.length) + 1;
        const newSupo1 = [];
        const newSupo2 = [];
        const newSupo3 = [];
        for (let i = 0; i < supo1loop; i++) {
            newSupo1.push(...supo1);
            newSupo2.push(...supo2);
            newSupo3.push(...supo3);
        }

        for (i = 0; i < answers.length; i++) {
            if (newSupo1[i] === answers[i]) {
                supo1score.push(newSupo1[i]);
            }
            if (newSupo2[i] === answers[i]) {
                supo2score.push(newSupo2[i]);
            }
            if (newSupo3[i] === answers[i]) {
                supo3score.push(newSupo3[i]);
            }
        }
    }

    const [supo1Answer, supo2Answer, supo3Answer] = [
        supo1score.length,
        supo2score.length,
        supo3score.length,
    ];

    function findLargest(supo1Answer, supo2Answer, supo3Answer) {
        const max = Math.max(supo1Answer, supo2Answer, supo3Answer);
        if (supo1Answer === max) answer.push(1);
        if (supo2Answer === max) answer.push(2);
        if (supo3Answer === max) answer.push(3);
    }

    findLargest(supo1Answer, supo2Answer, supo3Answer);
    return answer;
}