function solution(s) {
  let answer = "";
  const answerArray = [];
  const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const arrayS = s.split(" ");
  arrayS.forEach((string) => {
    if (num.includes(string[0])) {
      lowerString = string.slice(1, string.length).toLowerCase();
      let completedWord = string[0] + lowerString;
      answerArray.push(completedWord);
    } else {
      upperString = string.slice(0, 1).toUpperCase();
      lowerString = string.slice(1, string.length).toLowerCase();
      let completedWord = upperString + lowerString;
      answerArray.push(completedWord);
    }
  });
  answer = answerArray.join(" ");
  console.log(answer);
  return answer;
}

