var answer = 0;
let x;
let newarray=[]

function solution(absolutes, signs) {
    for (let i = 0; i < absolutes.length; i++) {
        x = signs[i] ? absolutes[i] : -absolutes[i]
        answer += x
    }
    return answer
}