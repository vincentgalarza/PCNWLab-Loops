/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/

const average = (arr) => {
    const copyArr = arr.slice(0);
    let sumOfNums = 0;
    for (i = 0; i < copyArr.length; i++) {
        sumOfNums += copyArr[i];
    }
    return sumOfNums / arr.length;
}

console.log(average([1,2,3,4]), '2.5');

/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/

const squareEach = (arr) => {
    const newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr.push(arr[i] ** 2);
    }
    return newArr
}

console.log(squareEach([ 1, 2, 3, 4 ]), '[ 1, 4, 9, 16 ]');

/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/

const averageSquare = (arr) => {
    const newArr = [];
    let sumOfNums = 0
    for (i = 0; i < arr.length; i++) {
        newArr.push(arr[i] ** 2);
        sumOfNums += (arr[i] ** 2)
    }
    return sumOfNums / arr.length
}

console.log(averageSquare([ 1, 2, 3, 4 ]), '7.5')

/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/

const negateArr = (arr) => {
    const newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * -1);
    }
    return newArr
}

console.log(negateArr([ 1, 2, 3, 4 ]), '[ -1, -2, 3, -4 ]');

/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/

const reverseArr = (arr) => {
    const newArr = [];
    for (i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr
}

console.log(reverseArr([ 1, 2, 3, 4 ]), '[ 4, 3, 2, 1 ]');

/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/

const negateBackwards = (arr) => {
    const newArr = [];
    for (i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i] * -1);
    }
    return newArr
}

console.log(negateBackwards([ 1, 2, 3, 4 ]), '[ -4, -3, -2, -1 ]');