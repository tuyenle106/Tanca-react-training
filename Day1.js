function checkOddOrEven() {
    const number = parseInt(prompt("Check if a number is odd or even. Enter a number:"));

    if (isNaN(number)) {
        console.log("Please enter a valid number.");
        return;
    }

    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }

}

function sumFrom1ToN() { 
    const n = parseInt(prompt("Check the sum of all integers from 1 to N. Enter a positive integer N:"));

    if (isNaN(n) || n <= 0) {
        console.log("Please enter a valid positive integer.");
        return;
    }

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(`The sum of all integers from 1 to ${n} is ${sum}.`);
}

// a) Bảng cửu chương số 5
function multiplicationTableOf5() {
    console.log("Multiplication table of 5:");
    for (let i = 1; i <= 10; i++) {
        console.log(`5 x ${i} = ${5 * i}`);
    }
}

// b) Tìm và sửa lỗi đoạn code:
// console.log(a);
// a = 10;
// var a;

// giải thích:
// đoạn code trên vẫn chạy được vì var có hosting, 
// biến a sẽ được kéo lên đầu để khai báo nhưng chưa được gán giá trị, nên sẽ in ra undefined.