/* URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. */

/* 
the first thing to note is that a space is going from taking up one space, to taking up 3 spaces,
so the length of the new string will be number of spaces * 2 + current string length 
(it is * 2 because we are using the existing space to hold one of the URL characters)

So here are the steps.
1. Count the number of spaces in the original string
2. Calculate the new string length by: (step 1 result) * 2 + original string length
3. Loop through the original string
3a. every time you run into a character, move it to the position of the "new" end of string (step two result - 1)
3a*. Subtract one from new string length
4. If you encounter a space do the following:
4a. add "0" to the new string position - 1
4b. add "2" to new string space - 2
4b. add "%" to new string space - 3
4c. Subtract 3 from new string length (so we don't overwrite the extra added characters)

An important note: javascript strings are immutable, so we will beusing a character array in order to do this in place.
*/

// "Mr John Smith    ", 13
function URLify(charArray, strlen) {
    let numSpaces = 0; // 2
    for (let i = 0; i < strlen; i++) {
        if (charArray[i] === " ") {
            numSpaces++;
        }
    }

    let newStrLen = numSpaces * 2 + strlen;
    for(let i = strlen - 1; i > 0; i--) {
        if(charArray[i] === " ") {
            charArray[newStrLen - 1] = "0"
            charArray[newStrLen - 2] = "2"
            charArray[newStrLen - 3] = "%"
            newStrLen -= 3;
        } else {
            charArray[newStrLen - 1] = charArray[i]
            newStrLen--;
        }
    }

    return charArray.join("")
}

console.log(URLify([..."Mr John Smith    "], 13))
