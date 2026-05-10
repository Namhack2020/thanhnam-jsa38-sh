// 1.
let str = "Hello World";
let newStr = str + "!!!";
let subStr = str.substring(0, 5);
let lengthStr = str.length;

// console.log("Chuỗi ban đầu:", str);
// console.log("Chuỗi sau khi nối:", newStr);
// console.log("Chuỗi sau khi cắt:", subStr);
// console.log("Độ dài chuỗi:", lengthStr);

// 2.
let input1 = prompt("Nhập một chuỗi:");
let upper = input1.toUpperCase();
console.log("Chuỗi in hoa:", upper);

// 3.
let name = prompt("Nhập tên:");
let age = prompt("Nhập tuổi:");

console.log("Tên bạn là", name, "và bạn", age, "tuổi.");

//4.
let input2 = prompt("Nhập một câu:");
let count = input2.length;
console.log("Số ký tự:", count);