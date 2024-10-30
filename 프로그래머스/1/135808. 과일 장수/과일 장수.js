function solution(k, m, score) {
    let answer = 0;

    // 사과 점수를 내림차순 정렬하여 가장 높은 점수를 먼저 배치
    score.sort((a, b) => b - a);

    // m개 단위로 자르면서 최솟값을 곱하여 계산
    for (let i = 0; i < score.length; i += m) {
        if (i + m <= score.length) {
            answer += score[i + m - 1] * m;  // m개 단위로 묶고 최소값을 곱해 추가
        }
    }

    return answer;
}
