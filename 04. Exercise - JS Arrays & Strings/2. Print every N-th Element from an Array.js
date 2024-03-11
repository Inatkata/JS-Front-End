function solve(array, step) {
    let result = []
    for (let index = 0; index < array.length; index+=step) {
        result.push(array[index])
    }
    return result
}

function solve ( array, step) {
    return array.filter((element, index) => index % step === 0)
}