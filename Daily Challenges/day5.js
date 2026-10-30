function isPalindrome(str) {
    // 1 & 2: Convert to lowercase and remove non-alphanumeric characters (spaces, punctuation)
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 3: Reverse the string
    const reversed = cleaned.split('').reverse().join('');
    
    // Check if they match
    return cleaned === reversed;
}
console.log(isPalindrome("racecar"));                     
console.log(isPalindrome("hello"));                     
console.log(isPalindrome("A man a plan a canal Panama"));