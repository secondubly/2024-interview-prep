/**
 * There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.
 * Given two strings, write a function to check if they are one edit (or zero edits) away.
 */


// Algorithm Notes
// Inserting a character means all the other characters are the same, you are just missing one (so between both strings, there will be one character with an odd number of occurences)
// Removing a character again, means all the characters are the same, you are just deleting one (so between both strings, there will be one character with an odd number of occurences)
// Replacing a character is just removing, then inserting a character. This means that between both strings, there will be TWO characters with odd occurences (e.g. pale and bale)
// Thus, for the algorithm:
// 1. Count the occurence of each character in both strings and store them in a map
// 2. Iterate over the map and keep track of the number of odd occurring characters
// 3. if the number of odd occurring characters is over 2, then we return false, otherwise, it's true
// ------------------------------------------
// This runs in O(n+m) time where n and m are the lengths of str1 and str2 respectively. We must touch EVERY character to determine whether it satisfies the given condition

function oneAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) {
        return false
    }

    const charMap = new Map()
    for (const char of str1) {
        charMap.set(char, charMap.get(char) + 1 || 1)
    }

    for (const char of str2) {
        charMap.set(char, charMap.get(char) + 1 || 1) 
    }

    let oddCount = 0
    for (const count of charMap.values()) {
        if (count % 2 === 1) {
            oddCount++
        }
    }

    return oddCount < 3 ? true : false
}

/*
 I read the solution in the back of the book to see if they were different from mine - it was. But I noticed that the second solution they gave is actually not valid code.
 You'll notice below when you try to run it against "pale" and "bale" (which should return true), it returns false. I don't know if this was ever fixed in an addendum, but I added
 it because I felt like I was going crazy trying to figure out what I did wrong when taking notes and stepping through the code in my head.
*/
function oneAway2(str1, str2) {
    if(Math.abs(str1.length - str2.length) > 1) {
        return false
    }

    const shortStr = str1.length < str2.length ? str1 : str2
    const longStr = str1.length < str2.length ? str2 : str1

    const indexShort = 0
    const indexLong = 0
    let foundDifference = 0
    while (indexShort < shortStr.length && indexLong < longStr.length) {
        if(shortStr[indexShort] !== longStr[indexLong]) {
            if(foundDifference) {
                return false
            }
            foundDifference = true
            
            if(shortStr.length < longStr.length) {
                indexLong++
            }
        } else {
            indexShort++
            indexLong++
        }
    }
    return true
}

console.log(oneAway('pale', 'ple'))
console.log(oneAway2('pale', 'bale'))
console.log(oneAway('pale', 'bale'))
// console.log(oneAway('pales', 'pale'))
// console.log(oneAway('pale', 'bale'))
// console.log(oneAway('pale', 'bake')) 