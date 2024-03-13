function solve (firstCharacter, secondCharacter) {

const [start, end] = getSortedChars(firstCharacter, secondCharacter)

const result = getCharsBetween(start, end)

console.log(result.join(' '))

    function getCharsBetween(start, end){
        let characters = []

        for (let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++) {
            characters.push(String.fromCharCode(i))
        }

        return characters
    }

    function getSortedChars(a, b) {
        const characters = [a, b]

        characters.sort()

        return characters
    }
}