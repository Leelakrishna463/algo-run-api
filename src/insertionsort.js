exports.Details = {
    'Description': "Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.",
    'Time Complexity': {
        'Worst Case Performance': {
            'Comparisons': 'O(n^2)',
            'Swaps': 'O(n^2)'
        },
        'Best Case Performance': {
            'Comparisons': 'O(n)',
            'Swaps': 'O(1)'
        },
        'Average Case Performance': {
            'Comparisons': 'O(n^2)',
            'Swaps': 'O(n^2)'
        }
    },
    'Space Complexitity': 'O(n)'
}



exports.isort = (array) => {
    let alen = array.length;
    for (let i = 0; i < alen; i++) {
        for (j = i; j > 0 && array[j] < array[j - 1]; j--) {
            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
        }
    }
    return array;
}