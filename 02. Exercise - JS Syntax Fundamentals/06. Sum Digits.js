function solve(input) {
    let sum = 0;
    let number = input; 
    while (number > 0) {
        let digit = number % 10; 
        sum += digit;
        number = Math.floor(number / 10); 
        }
    console.log(sum);
}