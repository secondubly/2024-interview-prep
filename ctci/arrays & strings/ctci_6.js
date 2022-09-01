function stringCompression(str) {
    const compressedLength = compressLength(str)
}

function compressLength(str) {
    let compressedLength = 0
    let characterCount = 0

    for(let i = 0; i < str.length; i++) {
        characterCount++
        if (i + 1 > str.length || str[i] !== str[i+1]) {
            compressedLength += 1 + String.valueOf(characterCount).length
            characterCount = 0
        }
    }
    return compressedLength
}