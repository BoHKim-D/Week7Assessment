const addToZero = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[i]+arr[j] === 0) {
                return true;
            }
        }
    } 
    return false;
}
// Time complexity: O(n^2)
// Space Complexity: O(n^2)

const hasUniqueChars = (str) => {
    for (i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            return false;
        }
    }
    return true;
}
// Time complexity: O(1)
// Space complexity: O(n)

const isPangram = (str) => {
    
    const letters = str.toLowerCase().math(/[a-z]/g);
    const alphabet = [...new Set(letters)]
    
    return alphabet.length === 26;
}
// Time complexity: O(n)
// Space complexity: O(n)

function findLongestWord(arr) {
    
    let longestWord = 0;
    
    for(let i in arr){
        if(arr[i].length > longestWord){
            longestWord = arr[i].length;
        }
    }
    return longestWord;
}
// Time complexity: O(n)
// Space complexity: O(n)