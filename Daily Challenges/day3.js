// Approach 1: Loop
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargest([6, 12, 4, 36, 9]));

// Approach 2: Using Reduce
function findLargestReduce(arr) {
    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}

console.log(findLargestReduce([6, 12, 4, 36, 9]));