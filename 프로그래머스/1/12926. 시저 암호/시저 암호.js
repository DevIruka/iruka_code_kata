function solution(s, n) {
    let lowerAlphabets = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    let upperAlphabets = lowerAlphabets.map((str) => {
        return str.toUpperCase();
    });
    let resultArray = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            resultArray.push(" ");
        }

        if (lowerAlphabets.includes(s[i])) {
            let index = lowerAlphabets.findIndex((item) => {
                return item === s[i];
            });
            if (index + n <= 25) {
                resultArray.push(lowerAlphabets[index + n]);
            } else {
                resultArray.push(lowerAlphabets[index + n - 26]);
            }
        }

        if (upperAlphabets.includes(s[i])) {
            let index = upperAlphabets.findIndex((item) => {
                return item === s[i];
            });
            if (index + n <= 25) {
                resultArray.push(upperAlphabets[index + n]);
            } else {
                resultArray.push(upperAlphabets[index + n - 26]);
            }
        }
    }
    return resultArray.join('')
}