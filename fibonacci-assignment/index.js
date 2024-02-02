/**
 * Generates first n Fibonacci numbers using recursion.
 * @param {numnber} n The number of the first n Fibonacci numbers. 
 * @returns {Array<numbers>} An array of first n Fibonacci numbers.
 */

function fibsRec(n) {
    /**
     * A helper recursive function to calculate Nth Fibonacci number.
     * @param {number} n The position of fibonacci number to calculate.
     * @returns {number} The Nth Fibonacci number.
     */
    function fibo(n) {
        if (n <= 1)
            return n;
        return fibo(n-1) + fibo(n-2);
    }
    return new Array(n).fill(null).map((elem, i) => fibo(i))
}

console.log(fibsRec(8))

/* *************************************** */

/**
 * Generates the first n Fibonacci numbers using an iterative approach.
 * @param {number} n The number of the first n Fibonacci numbers to generate.
 * @returns {Array<number>} An array of the first n Fibonacci numbers.
 */
function fibs(n) {
    const fibResult = [];
    let [n1, n2] =  [0, 1];

    while (n-- > 0) {
        fibResult.push(n1);
        [n1, n2] = [n2, n1 + n2];
    }
    return fibResult;
}

console.log(fibs(8));