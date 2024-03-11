function solve (word, text) {
    const words = text.toLowerCase().Split(' ')
    const isIncluded = words.includes(word.toLowerCase())
    if (isIncluded) {
        return word
    }
    return `${word} not found!`
}