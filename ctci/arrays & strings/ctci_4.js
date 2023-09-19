/*
Palindrome Permutation: Given a stirng, write a functino to check if it is a permutation of a palindrome. 
A palindrome is a word or phrase that is the same backwards and forwards. A permutation is a rearrangement of letters.
The palindrome does not need to be limited to just dictionary words.
*/

/*
    The important thing to not here is that the problem mentions you are not limited to just dictionary words.
    So you can't just create a dictionary of every possilble combination and use that to solve the problem (but why would you?)

    The concept here is to note that a palindrome is the same forwards and backwards: racecar, for example. If you look at any palindrome,
    you'll notice they fall into two categories: they either have the same number of letters and one odd number of letters (in racecar: 2 r's, 2 a's, 2 c's, 1 e)
    or the same number of letters and NO odd number of letters at all (for example: noon)

    With this in mind, we can just go through any given string, and count the number of letters, and put them in buckets.
    Afterwards, go through the buckets and see if more than one bucket contains an odd number of letters, if so, then we can return false.
    Otherwise, it is a palindrome permutation.
*/


// Given example: "tact coa"
function palindromePermutation(str) {
    const charBuckets = new Map(); // this is the bucket we will use to store the letter groups
    for(const char of str) {
        if (char === " ") {
            continue; // we can skip spaces, they don't matter
        }
        if(charBuckets.has(char)) {
            let currentCount = charBuckets.get(char) + 1
            charBuckets.set(char, currentCount)
        } else {
            charBuckets.set(char, 1)
        }
    }

    let oddCount = 0
    for (const count of charBuckets.values()) {
        // you could terminate this for-loop early by
        // checking to see if odd count is greater than 1 when you encounter another odd value
        // but I left it as is since that's a pretty small optimization and doesn't matter
        // in the grand-scheme of things
        if (count % 2 === 1) {
            oddCount++
        }
    }

    return oddCount > 1 ? false : true
}

console.log(palindromePermutation("tact coa"))