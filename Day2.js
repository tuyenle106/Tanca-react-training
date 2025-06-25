// tính bình phương bằng arrow function
const square = (x) => {
    console.log(`The square of ${x} is ${x * x}.`);
}

// Dùng filter để lấy các số lớn hơn 5 từ mảng [2, 7, 4, 9, 3].  
const numbers = [2, 7, 4, 9, 3];
const filteredNumbers = numbers.filter(num => num > 5);
console.log(`Numbers greater than 5: ${filteredNumbers.join(', ')}`);

// Dùng destructuring lấy phần tử đầu tiên và còn lại từ mảng [1, 2, 3, 4].  
const array = [1, 2, 3, 4];
const [head, ...tail] = array;
console.log(`First element: ${head}, remaining elements: ${tail.join(', ')}`);

// Gộp 2 mảng [1, 2] và [3, 4] bằng spread operator.  
const array1 = [1, 2];
const array2 = [3, 4];
const mergedArray = [...array1, ...array2];
console.log(`merged array: ${mergedArray}`);

