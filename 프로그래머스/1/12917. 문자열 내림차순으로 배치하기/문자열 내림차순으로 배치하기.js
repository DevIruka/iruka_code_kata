function solution(s) {
    let answer;
    let noneCaps = [...s]
        .filter(function (str) {
            return str === str.toLowerCase();
        })
        .sort()
        .reverse()
        .join("");
    let caps = [...s]
        .filter(function (str) {
            return str === str.toUpperCase();
        })
        .sort()
        .reverse()
        .join("");
    return (answer = noneCaps + caps);
}