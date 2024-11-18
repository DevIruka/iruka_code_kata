function solution(s) {
    let count = 0; // 분리된 문자열 개수
    let i = 0; // 현재 위치

    while (i < s.length) {
        let x = s[i]; // 현재 분리 기준 문자
        let xCount = 0;
        let otherCount = 0;

        // 두 그룹의 횟수가 같아질 때까지 반복
        for (let j = i; j < s.length; j++) {
            if (s[j] === x) {
                xCount++;
            } else {
                otherCount++;
            }

            // 조건 충족 시 문자열 분리
            if (xCount === otherCount) {
                count++;
                i = j + 1; // 다음 분리 시작 지점으로 이동
                break;
            }
        }

        // 조건 충족이 불가능한 경우 남은 문자열을 하나로 처리
        if (xCount !== otherCount) {
            count++;
            break;
        }
    }

    return count;
}