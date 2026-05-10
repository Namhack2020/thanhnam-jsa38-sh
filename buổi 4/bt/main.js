let users = [
    { id: 1, name: "An" },
    { id: 2, name: "Nam" },
    { id: 3, name: "Chi" }

]
users.push({id: 4, name: "Hoa"})
for (let i=0;i<users.length;i++){
    if (users[i].id == 1){
        users[i].name = "Anh"
        break
    }
}
for (let i=0;i<users.length;i++){
    if (users[i].id == 3){
        users.splice(i, 1)
        break
    }
}

let person = {
    name: "Jay",
    age: 26,
    city: "Ho Chi Minh"
}

person.email = "abc@123.com"
delete person.age