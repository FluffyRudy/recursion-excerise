/**
 * Sorts an array using the merge sort algorithm.
 *
 * @param {Array} array - The array to be sorted.
 * @param {number} low - The starting index of the subarray to be sorted.
 * @param {number} high - The ending index of the subarray to be sorted.
 * @returns {undefined} - The function does not return a value.
 */
function mergeSort(array, low, high) {
    if (low >= high)
        return;
    const mid = low + parseInt((high - low) / 2);
    mergeSort(array, 0, mid);
    mergeSort(array, mid+1, high);
    merge(array, low, mid, high);
}

/**
 * Merges two subarrays of the given array.
 *
 * The subarrays are defined by the indices low, mid, and high. The first subarray is from low to mid, and the second subarray is from mid+1 to high. Both subarrays must be sorted before calling this function.
 *
 * @param {Array} array - The array that contains the subarrays to be merged.
 * @param {number} low - The starting index of the first subarray.
 * @param {number} mid - The ending index of the first subarray and one less than the starting index of the second subarray.
 * @param {number} high - The ending index of the second subarray.
 * @returns {undefined} - The function does not return a value. It modifies the input array in-place.
 */
function merge(array, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;

    const leftArray = new Array(n1);
    const rightArray = new Array(n2);

    for (let i = 0; i < n1; i++) {
        leftArray[i] = array[low + i];
    }

    for (let i = 0; i < n2; i++) {
        rightArray[i] = array[mid + i + 1];
    }

    let [i, j, k] = [0, 0, low];
    while (i < n1 && j < n2) {
        if (leftArray[i] < rightArray[j])
            array[k] = leftArray[i++];
        else
            array[k] = rightArray[j++];
        k++;
    }

    while (i < n1) {
        array[k++] = leftArray[i++];
    }

    while (j < n2) {
        array[k++] = rightArray[j++];
    }
}

const array = [5, 2, 8, 3, 9];
mergeSort(array, 0, array.length-1);
console.log(array)