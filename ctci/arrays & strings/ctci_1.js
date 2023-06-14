function isUnique(str) {
    for (let i = 0; i < str.length - 1; i++) {
        for(let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }
        }
    }

    return true
}

function isUniqueWithDS(str) {
    const uniqueSet = new Set()
    for(const char of str) {
        if (uniqueSet.has(char)) {
            return false
        } else {
            uniqueSet.add(char)
        }
    }

    return true
}

// console.log(isUnique('baby'))
// console.log(isUnique('pow'))

// console.log(isUniqueWithDS('baby'))
// console.log(isUniqueWithDS('pow'))

console.log(isUnique(''))