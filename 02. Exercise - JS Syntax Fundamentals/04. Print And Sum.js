function solve(num1, num2) {
    let sum = 0
    let string = ''
for (let index = num1; index <= num2; index++) {
    string += index + " ";
    sum +=index
}
console.log(string)
console.log(`Sum: ${sum}`)
}
