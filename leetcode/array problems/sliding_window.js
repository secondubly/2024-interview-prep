/*
Author: secondubly
sliding_window.js (c) 2022
Desc: Sliding window is an algorithmic approach to substring/subarray problems that is pretty useful when it comes to arrays
Created:  2022-08-11T23:36:26.316Z
Modified: !date!
*/


/*
    When given a problem that asks for a "smallest substring" or "smallest subarray" OR "largest substring" OR "largest subarray"
    you'll probably want to try using the sliding window algorithm. The steps are given as follows:

    1. Create two pointers (or counters, or indices, whatever you wish to call them) called start and end: these will represent your "window"
    2. Move the "end" pointer through the array to find a valid substring or subarray that satisfies the required condition
        2a. This can change depending on the problem: e.g. finding a substring with no repeating characters, finding the length of longest substring of repeating characters, etc.
    3. When a valid ending pointer is found, move the starting point to find a smaller (or larger, depending on the problem) window
*/


function maxSumOfSubarray (arr, len) {
    let maxSum = -Infinity // this is the value that will contain the answer we return, I set this to -Infinity because it's possible to have negative numbers in your array!
    let tempSum = 0 // this is our "ending" pointer for step 1

    // this is just a sanity check, if the arr is smaller than the given length, there's nothing to do
    if (len < 0 || arr.length < len) {
        return null
    }

    for (let i = 0; i < arr.length; i++) { // here, i is our starting pointer
        tempSum += arr[i] // adding the current start pointer value to tempSum
        if (i >= len - 1) { // if we've gotten to a valid window size (AKA step 2 of the algorithm)
            maxSum = Math.max(tempSum, maxSum) // maxSum should be the largest value between tempSum and maxSum
            // this is the sliding window part!!! (aka step 3 in the algorithm above)
            let startPointerRemovalIndex = i - (len - 1) // we want to get the index of the leftmost value in the sliding window range (aka the start pointer)
            tempSum -= arr[startPointerRemovalIndex] // Subtract the starting sliding window value
        } // move the starting window range up by ONE, and do it all again
    }
    
    return maxSum
}

console.log(maxSumOfSubarray([1, 2, 3, 5, 4, 8, 6, 2], 3))