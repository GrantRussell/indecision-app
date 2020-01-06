const multiplier = {
    //numbers - array of numbers
    //multiplyBy - single number
    //multiply - returns a new array where the numbers have been multiplied
    numbers: [2, 4, 6],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());