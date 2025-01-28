const insertion_sort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        // store the current array value and position
        let val = arr[i]
        let pos = i
        // check if the current value is less than the value before it
        // AND the current value is NOT the start of the array
        while (pos > 0 && val < arr[pos - 1]) {
            // swap the values
            let temp = arr[pos] // store current position in a temp value
            arr[pos] = arr[pos - 1] // move the value before the current position to the current one
            arr[pos - 1] = temp // move the current position value to the spot before it
            pos-- // move the current pointer back one spot
        }
    }

    return arr
}


console.log(insertion_sort([1,6,7,4,2,9,8,5,3]))