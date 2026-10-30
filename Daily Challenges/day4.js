// Approach 1: Using Set
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 

// Approach 2: Using filter and index
function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Example usage:
console.log(removeDuplicatesFilter([1, 2, 2, 3, 4, 4, 5])); 
// Output: [1, 2, 3, 4, 5]