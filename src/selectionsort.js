exports.Details = {
    'Description': "The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\n1) The subarray which is already sorted.\n2) Remaining subarray which is unsorted",
    'Time Complexity': {
        'Worst Case Performance': {
            'Comparisons': 'O(n^2)',
            'Swaps': 'O(n)'
        },
        'Best Case Performance': {
            'Comparisons': 'O(n^2)',
            'Swaps': 'O(n)'
        },
        'Average Case Performance': {
            'Comparisons': 'O(n^2)',
            'Swaps': 'O(n)'
        }
    },
    'Space Complexitity': 'O(1)'
}



exports.ssort = (array) => {
    let alen = array.length;
    for (let i = 0; i < alen - 1; i++) {
        let jmin = i;
        for (let j = i + 1; j < alen; j++) {
            if (array[jmin] > array[j]) {
                jmin = j;
            }
        }
        if (jmin != i) {
            let temp = array[jmin];
            array[jmin] = array[i];
            array[i] = temp;
        }
    }
    return array;
}