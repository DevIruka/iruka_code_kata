function solution(n) {
  let prev = 0; 
  let curr = 1; 

  for (let i = 2; i <= n; i++) {
    let next = (prev + curr) % 1234567; 
    prev = curr;
    curr = next;
  }

  return n === 0 ? prev : curr; 
}

solution(6);
