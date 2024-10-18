function solution(s) {
    var answer = true;
    var nonanswer = false;

    let sarray = [...s];

    let Pnumbers = sarray.filter(function (a) {
        if (a === "p" || a === "P") {
            return a;
        }
    });
    let Ynumbers = sarray.filter(function (b) {
        if (b === "y" || b === "Y") {
            return b;
        }
    });

    if (Pnumbers.length === Ynumbers.length) {
        return answer;
        console.log(answer)
    } else {
        return nonanswer;
        console.log(nonanswer)
    }
}