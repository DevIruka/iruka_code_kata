function solution(k, score) {
    const answer = [];
    let hallOfFame = [];
    score.forEach((scores) => {
        hallOfFame.push(scores);
        hallOfFame.sort((a, b) => a - b);
        if (hallOfFame.length > k) {
            hallOfFame.shift();
        }
        answer.push(hallOfFame[0]);
    });
    return answer
}