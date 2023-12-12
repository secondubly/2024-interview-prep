function rotateMatrix(matrix) {
    const size = matrix.length
    // number of rotatable layers
    const layerCount = Math.floor(size / 2)

    // move through layers
    for (let i = 0; i < layerCount; i++) {
        const layer = i
        const last = size - layer - 1;

        // move within a layer
        for(let j = layer; j < last; j++) {
            // this is the "constant" we need to use to move around in a layer
            const offset = j - layer;

            // get the corner elements
            const top = matrix[layer][j]
            const right_side = matrix[j][last]
            const bottom = matrix[last][last-offset]
            const left_side = matrix[last-offset][layer]

            // e.g. in a 3x3 array: [0,2] => [0,0] (when j = 0 and first = 0)
            // then [1, 0] => [0, 1] (when j = 1 and first = 0)
            matrix[layer][j] = left_side
            // e.g. in a 3x3 array: [0,0] => [0,2] (when j = 0 and first = 0)
            // then [1, 0] => [1, 1] (when j = 1 and first = 0)
            matrix[j][last] = top
            // e.g. in a 3x3 array: [0,2] => [2,2] (when j = 0 and first = 0)
            matrix[last][last-offset] = right_side
            // e.g. in a 3x3 array: [2,2] => [2,0] (when j = 0 and first = 0)
            matrix[last-offset][layer] = bottom
            
        }
    }
}

function printMatrix(matrix) {
    matrix.forEach(row => {
        console.log(...row)
    })
}

const matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]
console.log('ORIGINAL\n-----------')
printMatrix(matrix)
console.log('ROTATED\n-----------')
rotateMatrix(matrix)
printMatrix(matrix)