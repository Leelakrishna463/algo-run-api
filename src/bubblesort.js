exports.Details = {
    'Description': 'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list',
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
    'Space Complexitity': 'O(1)'
}



exports.bsort = (array) => {
    let alen = array.length;
    let swapped = true;
    for (let i = 0; i < alen - 1 && swapped; i++) {
        swapped = false;
        for (let j = 0; j < alen - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
    }
    return array;
}