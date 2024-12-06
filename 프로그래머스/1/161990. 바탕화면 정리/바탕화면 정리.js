function solution(wallpaper) {
  let answer = [];
  const xArray = [];
  const luyArray = [];
  const rdyArray = [];
  let rdx = wallpaper.length;

  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#")) {
      xArray.push(i);
      const splitedString = wallpaper[i].split("");
      let luys = splitedString.indexOf("#");
      let rdys = splitedString.lastIndexOf("#");
      luyArray.push(luys);
      rdyArray.push(rdys);
    }
  }
  answer.push(Math.min(...xArray));
  answer.push(Math.min(...luyArray));
  answer.push(Math.max(...xArray) + 1);
  answer.push(Math.max(...rdyArray) + 1);
  return answer;
}