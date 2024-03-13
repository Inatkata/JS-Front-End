function solve(numbers) {

    numbers.forEach(printPalindromeResult)
    
    function printPalindromeResult(number) {
        console.log(isPalindrome(number))
    }

    function isPalindrome(number) {
        const forwardNumber = number.toString()
        const backwardNumber = forwardNumber.split('').reverse().join('')
        return forwardNumber === backwardNumber
    }
}