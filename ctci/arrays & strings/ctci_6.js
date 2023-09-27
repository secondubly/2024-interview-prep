/*

String Compression: Implement a method to perform basic string compression using the counts of repeated characters. 
For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than
the original string, your method should return the original string. YOu can assume that the string has only uppercase
and lowercase letters (a-z).

*/

/*

1. We should calculate the new string length first to reduce work later
2. in order to do that, we should keep track of how many of each letter we come across
(Itereate through string and check one letter ahead)
3. then add that to a string length variable and return that
4. We can reuse the method in steps 2 and 3 to actually build the string
*/

function compressStringLength(str) {
    let stringLength = 0
    let counts = 0
    for(let i = 0; i < str.length; i++) {
        counts++
        if (i === str.length - 1) {
            // if we're at the last character, just do the math
            stringLength += 1 + counts.toString().length
        } else {
            if(str[i] !== str[i+1]) {
                stringLength += 1 + counts.toString().length
                count = 0 // reset count
            }
        }
    }

    return stringLength
}

// example: aabcccccaaa
// result: a2b1c5a3
function stringCompression(str) {
    const newStrLength = compressStringLength(str)
    if(newStrLength > str.length) {
        return str
    }

    let compressedStr = ''
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        count++;
        if (i === str.length - 1) {
            compressedStr += `${str[i]}${count}`
            count = 0;
        } else {
            if(str[i] !== str[i+1]) {
                // Note: in js, string concatenation is O(log(n))
                // See: https://josephmate.github.io/java/javascript/stringbuilder/2020/07/27/javascript-does-not-need-stringbuilder.html
                // so this is actually safe to do!
                compressedStr += `${str[i]}${count}`
                count = 0;
            }
        }
    }

    return compressedStr
}

console.log('aabcccccaaa', stringCompression('aabcccccaaa'))