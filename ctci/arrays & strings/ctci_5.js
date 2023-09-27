/*
    One Away: There are three types of edits that can be performed on strings: insert a character,
    remove a character, or replace a character. Given two strings, write a function to check if they
    are one edit (or zero edits) away from each other.
*/


/*
Things to note:
- Replacing a character is just deletion + insertion
- Insert: use short string as the limiter
- Delete: use long string as limiter
- The lengths of both strings will determine what operation we should do on them
    * both strings same length? check for replacement
    * one string longer than the other? check insertion and deletion
- Replacement: iterate through both strings and make sure only ONE character is different (if not, return false)
- Insertion: loop through both strings, and check each letter: when you reach the end of the long string, if all letters match so far, you can return true
- Deletion: loop through both strings and check each letter, when you reach the end of the short string, if all letters match so far, you can return true
*/

function oneReplaceAway(str1, str2) {
    let i = 0
    let foundDifference = false
    while(i < str1.length) {
        if(str1[i] !== str2[i]) {
            if (foundDifference) {
                return false
            } else {
                foundDifference = true
            }
        }
        i++
    }

    return true
}

/* this is the trickier one in my opinion in the idea of string comparison,
   an insertion and deletion are the same operation
   (e.g. pales & pale => you can either delete an s, or add an s)
   
   Therefore, in both cases, the strings will different in ONE spot and 
   the indices have to match: we are limited by the length of the short
   string (if you try to use the long string as a limiter, you'll get an index out of bounds error)

   In the case where the insertion or deletion happens at the end, we can just presume that if we haven't
   returned early you can just return true after going through the loop (e.g. we hit the end of "pale" but "pales"
   still has an s to check, therefore that HAS to be the edit we need to make, so return true)
*/
function oneInsertAway(short, long) {
    let i = 0;
    let j = 0;

    while(i < short.length && j < long.length) {
        if(short[i] !== long[j]) {
            if (i !== j) {
                return false;
            }
            j++;
        }
        i++
        j++;
    }

    return true;
}

function oneAway(str1, str2) {
    if(Math.abs(str1.length - str2.length) > 1) {
        return false
    }
    
    if (str1.length === str2.length) {
        return oneReplaceAway(str1, str2)
    } else if(str2.length < str1.length) {
        return oneInsertAway(str2, str1)
    } else {
        return oneInsertAway(str1, str2)
    }
}

console.log(oneAway('pale', 'ple'))
console.log(oneAway('pales', 'pale'))
console.log(oneAway('pale', 'bale'))
console.log(oneAway('pale', 'bake'))