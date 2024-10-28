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
    let dayOfTheWeek = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    let time = 0;
    for (let i = 0; i < a - 1; i++) {
        time += Object.values(dates)[i];
    }
    time += b;
    let pointer = 0;
    if (time % 7 === 0) {
        pointer = 0;
    } else {
        pointer += time % 7;
    }
    answer = dayOfTheWeek[pointer];
    return answer
}