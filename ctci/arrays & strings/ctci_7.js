/**
 * Will update later!
 */

function rotateMatrix (arr) {
    // if the matrix is not a square, throw an error
    if(!Array.isArray(arr) || arr[0].length !== arr.length) {
        return null
    }
    const arrLength = arr.length
    // swap column values with row values (e.g. swap [0,1] with [1,0], etc.)
    for (let i = 0; i < arrLength; i++) {
        for (let j = i+1; j < arrLength; j++) { // we set j to i + 1 in order to skip [0,0],[1,1], etc...
            const temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp
        }
    }

    // swap column values on the ends (e.g. [0,1] with [0,3] in a 3x3 array)
    for(let i = 0; i < arrLength; i++) {
        // stop at the halfway point so that you don't undo your swaps
        // from the start of the array
        for (let j = 0; j < arrLength  / 2; j++) {
            const temp = arr[i][j]
            arr[i][j] = arr[i][arrLength - 1 - j]
            arr[i][arrLength - 1 - j] = temp
        }
    }

    return arr
}

// test array
const matrix = [[1,2,3],[4,5,6],[7,8,9]]
const invalidMatrix = [[9,10],[11,12],[13,14]]
console.log(rotateMatrix(invalidMatrix))
console.log(matrix)
console.log(rotateMatrix(matrix))