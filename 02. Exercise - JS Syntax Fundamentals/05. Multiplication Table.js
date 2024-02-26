function solve (input) {
    let result = 0
    for (let index = 1; index <= 10; index++) {
        result = input * index
        console.log(`${input} X ${index} = ${result}`)
    }
}