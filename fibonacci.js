let fib = [0, 1];
let result = 0;
for (let i = 0; i < 20; i++) {

    if (fib[i] < 20) {
        fib[i + 2] = fib[i] + fib[i + 1]
        //  result = fib[i + 2]
        // fib[i] = fib[i + 1]
        // fib[i + 1] = fib[i + 2]
    }



}
console.log(fib)
