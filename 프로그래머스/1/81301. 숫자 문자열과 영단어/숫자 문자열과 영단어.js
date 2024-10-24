function solution(s) {
    let answer = 0;
    let newS = "";
    let strNums = {
        zero: "0",
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
    };

    for (let [str, num] of Object.entries(strNums)) {
        while (s.includes(str)) {
            s = s.replace(str, num);
        }
    }
    return Number(s);
}