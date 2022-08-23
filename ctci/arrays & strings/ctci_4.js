// I'll add comments later, I'm tired

function permutationPalindrome(str) {
    const charMap = new Map()
    for (let char of str) {
        // ignore spaces
        if (char == ' ') {
            continue
        }
        charMap.set(char, charMap.get(char) ? charMap.get(char) + 1 : 1)
    }

    let oddCount = 0
    for(const count of charMap.values()) {
        if(count % 2 === 1) {
            oddCount++
        }
    }
    return oddCount > 1 ? false : true
}

console.log(permutationPalindrome("aaabbb"))
console.log(permutationPalindrome("tact coa"))