/**
 * URLifY: Replace all the spaces in a string with '%20'. 
 * Assumption : We have enough space to accomodate addition chars, and you are given the "true" length of the string
 */


// Note that in javascript, strings are immutable, so to do this in place, we need to use a character array
// Time Complexity: O(n) where n is the true length of the string
// Space complexity: O(1) as we are doing this in place, we don't use any extra space (though maybe .join() does?)
function URLify(charArray, len) {
    let spaceCount = 0;
    for (let i = 0; i < len; i++) {
        if (charArray[i] == ' ') {
            spaceCount++
        }
    }

    let newLength = len + (spaceCount * 2) // this calculates the new length of the URL-ified string (we multiply space by 2 because we can reuse the space character itself)
    charArray[newLength] = null // normally this would be a null termination character, but JS doesn't use those so just set the final position to null (that way it will not be printed in the result)
    newLength--

    for (let i = len - 1; i >= 0; i--) {
        if(charArray[i] == ' ') {
            charArray[newLength] = '0'
            charArray[newLength - 1] = '2'
            charArray[newLength - 2] = '%'

            newLength -= 3
        } else {
            charArray[newLength] = charArray[i]
            newLength--
        }
    }

    return charArray.join('') // unsure whether they want the character array back or just the string, so I return the string
}

const characterArray = 'Mr John Smith    '.split('')
console.log(URLify(characterArray, 13))