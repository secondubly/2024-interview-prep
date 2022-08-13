/**
 * isUnique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 */

// Brute Force Method
// The runtime here is O(str^2) because we are touching every element twice in the worst case scenario
// The space complexity is O(1): we do not store any additional data
// The bottleneck is the second loop in the program: ideally you'd want to find a way to not have to check every character twice
// Maybe storing the characters as you pass them would be beneficial?
function isUniqueBF(str) {
    if (str.length <= 1) {
        return true
    }

    for(let i = 0; i < str.length; i++) {
        let iChar = str[i]
        for(let j = i + 1; j < str.length; j++) {
            if(iChar === str[j]) {
                return false
            }
        }
    }
    return true
}

//
// Optimized Method #1
// The runtime is O(str) as in the worst case scenario (every single character is unique) we touch each letter one time.
// The space complexity however, is also O(str) as we may end up storing every single character in the string when they are all unique characters
function isUnique(str) {
    const charSet = new Set()
    for(let i = 0; i < str.length; i++) {
        const char = str[i]
        if(charSet.has(char)) {
            return false
        }
        charSet.add(char)
    }
    return true
}

console.log(isUniqueBF('oboe'))
console.log(isUniqueBF('water'))
console.log(isUnique('oboe'))
console.log(isUnique('water'))
console.log(isUniqueBF(''))
console.log(isUnique(''))
console.log(isUniqueBF('a'))
console.log(isUnique('a'))