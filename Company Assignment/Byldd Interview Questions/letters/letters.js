
/**
 * @desc takes a word and returns an array of all the letters
 *       not found in the alphabet
 * @param {String} word
 * @return {Array<String>}
 */
function letters(word) {
    word=word.toLocaleLowerCase()
    let longstr="abcdefghijklmnopqrstuvwxyz".split("")
    let output=longstr.filter((alpha)=>!word.includes(alpha))
    return output
}


module.exports = letters;
