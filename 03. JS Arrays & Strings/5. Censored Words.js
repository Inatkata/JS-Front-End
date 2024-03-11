function solve(input, word) {
    let index = input.indexOf(word)
    while(index >= 0) {
        text = input.replace(word, '*'.repeat(word.length))
        index = text.indexOf(word)
    }
    console.log(text)
}
//function solve2(text, words) {
//  const pattern = new regExp(word,'g')
//const result = text.replace(pattern, '*'.repeat(word.length))
//console.log(result)
//}
