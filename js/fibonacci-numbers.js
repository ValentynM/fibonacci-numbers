const index = parseInt(prompt('Enter Fibonacci number index: '));

alert(`${index} fibonacci number is:
1) function with cycle ${getFibonacciNumberByCycle(index)};
2) function with recursion ${getFibonacciNumberByRecursion(index)};
3) function with array and cycle ${getFibonacciNumberByArrayAndCycle(index)}.`);

function getFibonacciNumberByCycle(index) {
    if (index <= 0) {
        return ;
    }
    let firstNumber = 1;
    let secondNumber = 1;
    for (let i = 3; i <= index; i++) {
        let next = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = next;
    }
    return secondNumber;
}

function getFibonacciNumberByRecursion(index) {
    if (index <= 0) {
        return ;
    }
    if (index <= 2) {
        return 1;
    }
    return getFibonacciNumberByRecursion(index - 1) + getFibonacciNumberByRecursion(index - 2);
}

function getFibonacciNumberByArrayAndCycle(index) {
    if (index <= 0) {
        return ;
    }
    let numberArray = [1, 1];
    for (let i = 3; i <= index; i++) {
        let next = numberArray[numberArray.length - 1] + numberArray[numberArray.length - 2];
        numberArray.push(next);
    }
    return numberArray[numberArray.length - 1];
}

// function checkIndexValue(func) {
//     function wrapper(index) {
//         if (index <= 0) {
//             return ;
//         }
//         func.call(this, index);
//     }
//     return wrapper;
// }
