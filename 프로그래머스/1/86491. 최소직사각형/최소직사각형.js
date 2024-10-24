function solution(sizes) {
    let answer = 0;
    let width_array;
    let height_array;
    sizes.forEach((e) => {
        e.sort((a, b) => a - b);
    });
    width_array = sizes.map(function (item) {
        return item[0];
    });
    height_array = sizes.map(function (item) {
        return item[1];
    });

    const width = Math.max(...width_array);
    const height = Math.max(...height_array);
    answer = width * height;
    return answer;
}