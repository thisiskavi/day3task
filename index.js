let obj1 = {name: "Kavi", age: 23};
let keys1 = Object.keys(obj1).sort()
let obj2 = {age: 20, name: "Sree"};
let keys2 = Object.keys(obj2).sort()

{
    console .log(JSON.stringify(obj1));
    console .log(JSON.stringify(obj2));
}
