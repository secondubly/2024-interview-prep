/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
 */


//
// Brute Force Method: Sort the strings and then check if the letters at each position match
// (strings must be of the same length of course)\
// Note that the runtime here is O(n * log(n)) due to the sorting
// Space Complexity however is O(n) (where n = the length of the strings)
// Ideally we'd want to see if we can reduce the runtime down to O(n),
// as sorting is a bottleneck, try to see if we can remove the need for sorting!0
//

function checkPermutationBF(strA, strB) {
    if(strA.length !== strB.length) {
        return false
    }
    
    let arr = strA.split('')
    let sorted = arr.sort()
    const sortedA = sorted.join('')

    arr = strB.split('')
    sorted = arr.sort()
    const sortedB = sorted.join('')

    for(let i = 0; i < strA.length; i++) {
        if(sortedA[i] !== sortedB[i]) {
            return false
        }
    }
    return true
}

// Optimized Method: By using a Map and keeping track of the number of characters in one string, we can check the
// second string against those numbers - every time we encounter a matching letter, decrease the count by one.
// if we encounter a letter that isn't in the Map, we can break early and return false
// THEN we check the map to see if there are any values that aren't 0
// Note that if a count is negative, that means we encounter more duplicates in one string than the other
// so it also shouldn't match.
// Runtime: O(n) (where N is the length of the strings)
// Space Complexity: O(n) (Where n is the characters in a string)
function checkPermutation(strA, strB) {
    if(strA.length !== strB.length) {
        return false
    }

    const strMap = new Map()
    for (const char of strA) {
        strMap.set(char, strMap.get(char) + 1 || 1)
    }

    for (const char of strB) {
        if (!strMap.has(char)) {
            return false
        }
        strMap.set(char, strMap.get(char) - 1)
    }

    for (const count of strMap.values()) {
        if(count !== 0) {
            return false
        }
    }
    return true
}

console.log(checkPermutationBF('aba', 'bba'))
console.log(checkPermutationBF('aba', 'baa'))

console.log(checkPermutation('aba', 'bba'))
console.log(checkPermutation('aba', 'baa'))