console.log("hello world");
console.table({name: "John", age: 99});
console.error("this is an error");
console.warn("this is a warning");
console.info("this is an infomation");

// nơi chứa giá trị
var chainuoc = ""

//phép gán
chainuoc = "nuoc"

// in ra giá trị
console.log(chainuoc)

console.log(typeof(chainuoc))

const fullName = "nameee";
const bottleName= chainuoc+" "+fullName

// Độ dài chuỗi
console.log(bottleName.length)
console.log(bottleName [bottleName.length-1]) // Lấy kí tự cuối
console.log(bottleName.toLocaleUpperCase())// Viết hoa hết các chữ
console.log(bottleName.split(" "))// Tách chữ

const a = "                  Hello alo             "
console.log(a)
console.log(a.trim())//Loại bỏ khoảng trắng ở đầu và cuối chuỗi