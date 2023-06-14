function isPermutation(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    const charCountMap = new Map()
    for(const char of str1) {
        if(charCountMap.has(char)) {
            charCountMap.set(char, charCountMap.get(char) + 1)
        } else {
            charCountMap.set(char, 1)
        }
    }

    for (const char of str2) {
        if(charCountMap.has(char)) {
            charCountMap.set(char, charCountMap.get(char) + 1)
        } else {
            return false
        }
    }

    let oddCharCount = 0
    for (const [_, value] of charCountMap) {
        if(value % 2 === 1) {
            oddCharCount++;
        }
    }

    return str1.length % 2 === 1 ? oddCharCount <= 1 : oddCharCount < 1
}

console.log(isPermutation('baby', 'abby'))