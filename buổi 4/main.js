let mixedArray = [1,'Hello',true,null,undefined]
console.log(mixedArray[2])
for (let i=0;i<mixedArray.length;i++){
    console.log(mixedArray[i])
}

//Thêm phần tử
let arr=[1,2,3,4]
arr.push(5,10) //Thêm phần tử vào cuối mảng

arr.splice(1,1,'Phần tử mới') // 0 là vị trí bắt đầu, 1 là số phần tử bị xóa từ vị trí bắt đầu, "phần tử mới" là phần tử thêm vào thế chỗ bị xóa
console.log(arr)

arr[0]='n'//Cập nhật giá trị của phần tử trong array
console.log(arr)

let fruits=['apple','banana','orange','banana']
console.log(fruits.indexOf('banana')) //tìm index của phần tử qua giá trị của phần tử đó, chỉ lấy giá trị đầu tiên

arr.splice(1,1) //xóa phần từ

let person={
    name: 'John',
    age: 30,
    job: 'developer'
}
console.log(person.name)
console.log(person['name'])

for (let i in person){
    console.log(i)
}
//in ra key của person
for (let i in person){
    console.log(person[i])
}
//in ra value của person

person.gender = 'female' //thêm key và value vào obj
person['salary'] = 30000
console.log(person)

if ('age' in person){console.log("key age tồn tại trg obj person")}
if (person.hasOwnProperty){console.log("key age tồn tại trg obj person")}

delete person.age

let hocSinh =[
    {ten: 'An', tuoi: 15, lop:'10A1'},
    {ten: 'Bình', tuoi: 16, lop:'11A2'},
    {ten: 'Châu', tuoi: 15, lop:'10A1'},
]
hocSinh.push({ten: 'Dũng', tuoi: 17, lop:'11A3'})
console.log(hocSinh)
hocSinh[1].tuoi = 17
hocSinh.splice(2,1)
console.log(hocSinh)