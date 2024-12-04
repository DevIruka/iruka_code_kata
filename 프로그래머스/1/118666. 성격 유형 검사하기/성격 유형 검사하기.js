function solution(survey, choices) {
  let answer = "";
  let answerArray = [];
  let stack = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] >= 5) {
      const score = choices[i] - 4;
      const string = survey[i].substring(1, 2);
      stack[string] += score;
    }

    if (choices[i] === 4) {
      const score = 0;
      const string = survey[i].substring(1, 2);
      stack[string] += score;
    }

    if (choices[i] <= 3) {
      const score = (choices[i] - 4) * -1;
      const string = survey[i].substring(0, 1);
      stack[string] += score;
    }
  }

  if (stack.T > stack.R) {
    answerArray.push("T");
  } else {
    answerArray.push("R");
  }

  if (stack.F > stack.C) {
    answerArray.push("F");
  } else {
    answerArray.push("C");
  }

  if (stack.M > stack.J) {
    answerArray.push("M");
  } else {
    answerArray.push("J");
  }

  if (stack.N > stack.A) {
    answerArray.push("N");
  } else {
    answerArray.push("A");
  }
  answer = answerArray.join("");
  return answer;
}

solution(["TR", "RT", "TR"], [7, 1, 3]);
