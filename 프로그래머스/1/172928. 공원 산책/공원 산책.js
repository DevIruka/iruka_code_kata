function getPoints(park, routes) {
  const startPoint = [];
  const obstaclePoints = new Set();

  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      startPoint.push(
        i,
        park[i].split("").findIndex((SIndex) => SIndex === "S")
      );
    }
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "X") {
        obstaclePoints.add(`${i},${j}`); // 장애물 좌표를 문자열로 저장
      }
    }
  }

  return { startPoint, obstaclePoints };
}

function solution(park, routes) {
  let { startPoint, obstaclePoints } = getPoints(park, routes);
  const [H, W] = [park.length, park[0].length]; // 공원의 높이와 너비

  const directions = {
    N: [-1, 0], // 북쪽
    S: [1, 0],  // 남쪽
    E: [0, 1],  // 동쪽
    W: [0, -1], // 서쪽
  };

  for (let route of routes) {
    const [dir, distance] = route.split(" ");
    const [dx, dy] = directions[dir];
    let [x, y] = startPoint;

    let canMove = true;
    for (let step = 1; step <= +distance; step++) {
      const nx = x + dx * step;
      const ny = y + dy * step;

      // 공원을 벗어나면 이동 불가
      if (nx < 0 || nx >= H || ny < 0 || ny >= W) {
        canMove = false;
        break;
      }

      // 장애물이 있으면 이동 불가
      if (obstaclePoints.has(`${nx},${ny}`)) {
        canMove = false;
        break;
      }
    }

    // 이동 가능하면 좌표 갱신
    if (canMove) {
      startPoint = [x + dx * distance, y + dy * distance];
    }
  }

  return startPoint;
}
