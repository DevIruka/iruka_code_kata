function solution(a, b, n) {
    let gotBottles = 0;   
    let emptyBottles = n;  

    while (emptyBottles >= a) {
        const newBottles = Math.floor(emptyBottles / a) * b; 
        gotBottles += newBottles;  
        emptyBottles = (emptyBottles % a) + newBottles; 
    }
    return gotBottles
}