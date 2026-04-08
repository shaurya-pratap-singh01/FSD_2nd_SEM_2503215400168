
//variable declaration
console.log("Variable Declaration:");

var name = "Dev"; // var is function-scoped
var c = null;
var d = undefined; 

let age = 25; // let is block-scoped

const PI = 3.14; // const is block-scoped and cannot be reassigned
        
//Output variable values
console.log("Name:", name);
console.log("Age:", age);
console.log("PI:", PI);
console.log("c:", c);
console.log("d:", d);

{
    var name = "Alice"; // var is function-scoped, so this will overwrite the previous 'name'
    console.log("Inside block - Name:", name); // Output: Alice
            
}
    