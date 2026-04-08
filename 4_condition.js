//if - else condition

let age = 16;
if(age>=18){
    console.log("Eligible for bank account and debit card.");
}
else if(age<18 && age>15){
    console.log("Eligible for bank account but not for debit card.");
}
else{
    console.log("Not eligible for a bank acccount.")
}

//switch case 

let month = 3;

switch (month) {
    case 1:
        console.log("January.");
        break;
    case 2 :
        console.log("February.");
        break;
    case 3:
        console.log("March.");
        break;
    case 4:
        console.log("April.");
        break;
    case 5:
        console.log("May.");
        break;
    case 6:
        console.log("June.");
        break;
    case 7:
        console.log("July.");
        break;
    case 8:
        console.log("August.");
        break;
    case 9:
        console.log("September.");
        break;
    case 10:
        console.log("October.");
        break;
    case 11:
        console.log("November.");
        break;
    case 12:
        console.log("December.");
        break;         
    default:
        console.log("Just another day");
}