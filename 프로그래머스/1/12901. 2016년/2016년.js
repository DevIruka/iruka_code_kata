function solution(a, b) {
    let answer = "";
    let dates = {
        JAN: 31,
        FEB: 29,
        MAR: 31,
        APR: 30,
        MAY: 31,
        JUN: 30,
        JUL: 31,
        AUG: 31,
        SEP: 30,
        OCT: 31,
        NOV: 30,
        DEC: 31,
    };
    let time = 0;
    for (let i = 0; i < a - 1; i++) {
        time += Object.values(dates)[i];
    }
    time += b;
    if (time % 7 === 1) {
        answer = "FRI";
    }
    if (time % 7 === 2) {
        answer = "SAT";
    }
    if (time % 7 === 3) {
        answer = "SUN";
    }
    if (time % 7 === 4) {
        answer = "MON";
    }
    if (time % 7 === 5) {
        answer = "TUE";
    }
    if (time % 7 === 6) {
        answer = "WED";
    }
    if (time % 7 === 0) {
        answer = "THU";
    }
    return answer
}