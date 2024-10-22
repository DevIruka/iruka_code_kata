process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = "*".repeat(n[0]),
        b = Number(n[1]);
    for (let i = 0; i < b; i++) {
        console.log(a);
    }
});