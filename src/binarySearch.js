//Description of Binary Search
exports.Details = {
    'Description': 'Binary search, also known as half-interval search, logarithmic search,or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array',
    'Time Complexity': {
        'Best Case': 'O(1)',
        'Worst Case': 'O(logn)',
        'Average Case': 'O(logn)',
    },
    'Space Complexity': 'O(1)',
    'Constraints': 'Array Needs to be sorted'
};


//Binary Search Iterative Implementation
exports.search = (array, searchElement) => {
    let alen = array.length;
    for (let i = 0; i < alen - 1; i++) {
        if (array[i] > array[i + 1]) {
            return new Error('Array needs to be Sorted');
        }
    }
    let low = 0;
    let high = alen - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] === searchElement) {
            return mid + 1;
        }
        else if (array[mid] < searchElement) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}



