/**
 * This is my solution to the problem, this isn't 100% efficient as it calculates the compressed string in EVERY case and then compares it against the original string.
 * As string concatenation is generally O(n^2) runtime. We cannot avoid this but we can simply skip it if the original string would be shorter than the compressed string.
 * @param {string} str 
 * @returns 
 */

function myStringCompression(str) {
    let start = 0
    let end = 0
    let compressedStr = ""
    while(start < str.length) {
        if(str[start] === str[end]) {
            end++
        } else {
            const count = end - start
            compressedStr += `${str[start]}${count}`
            start = end
        }
    }

    return compressedStr.length > str ? str : compressedStr
}
/**
 * This is the book's formula below, they calculate the length of the compressed string first to see if it would actually be longer than the original string.
 * This reduces space complexity for cases where the compressed string will be longer than the original string because it doesn't compute the entire string first.
 * @param {str} str 
 * @returns compressed string or original string
 */

function stringCompression(str) {
    const compressedLength = compressLength(str)
    if (compressedLength > str.length) {
        return str
    }
    
    let start = 0
    let end = 0
    let compressedStr = ""
    while(start < str.length) {
        if(str[start] === str[end]) {
            end++
        } else {
            const count = end - start
            compressedStr += `${str[start]}${count}`
            start = end
        }
    }

    return compressedStr
}

function compressLength(str) {
    let compressedLength = 0
    let characterCount = 0

    for(let i = 0; i < str.length; i++) {
        characterCount++
        if (i + 1 > str.length || str[i] !== str[i+1]) {
            compressedLength += 1 + characterCount.toString().length
            characterCount = 0
        }
    }
    return compressedLength
}

console.log(stringCompression('aabcccccaaa'))
console.log(myStringCompression('aabcccccaaa'))