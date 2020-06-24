
exports.Details = {
    'Description': "Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves",
    'Time Complexity': {
        'Worst Case': 'O(nlogn)',
        'Best Case': 'O(nlogn)',
        'Average Case': 'O(nlogn)'
    },
    'Space Complexitity': 'O(n)'
}

function merge(arr1, arr2) {
    let i = 0, j = 0, k = 0, m = arr1.length, n = arr2.length;
    let sol = [];
    while (i < m && j < n) {
        if (arr1[i] <= arr2[j]) {
            sol.push(arr1[i]);
            i++;
        }
        else {
            sol.push(arr2[j]);
            j++;
        }
    }
    return sol.concat(arr1.slice(i)).concat(arr2.slice(j));
}


function mergesort(array) {
    n = array.length;
    if (n <= 1) {
        return array;
    }
    let m = Math.floor(n / 2);
    const arr1 = array.slice(0, m);
    const arr2 = array.slice(m);
    return merge(mergesort(arr1), mergesort(arr2));

}


exports.msort = (array) => {
    return mergesort(array);
}