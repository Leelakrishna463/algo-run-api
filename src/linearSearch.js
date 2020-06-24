//Description of Linear Search
exports.Details = {
    'Description': ' linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched',
    'Time Complexity': {
        'Best Case': 'O(1)',
        'Worst Case': 'O(n)',
        'Average Case': 'O(n)',
    },
    'Space Complexity': 'O(1)'
};


//Linear search implementation
exports.search = (array, searchElement) => {
    let alen = array.length;
    for (let i = 0; i < alen; i++) {
        if (array[i] === searchElement) {
            return i + 1;
        }
    }
    return -1;
}



