// let school = [];

// function addrec(obj, A){
//     A.push(obj);
// }

// function display(A, acc){
//     for(let i = 0; i < A.length; i++){
//         if(A[i].addno == acc){
//             console.log("\n", A[i], "\n");
//             return; 
//         }
//     }
//     console.log("\nAccount not found.\n");
// }

// function update(A, acc, name, type){
//     for(let i = 0; i < A.length; i++){
//         if(A[i].addno == acc){
//             A[i].name = name;
//             A[i].type = type;
//             console.log("Successfully updated");
//             return; 
//         }
//     }
// }

// function deleteRecord(A, acc){
//     for(let i = 0; i < A.length; i++){
//         if(A[i].addno == acc){
//             A.splice(i, 1); 
//             console.log("Successfully deleted");
//         }
//     }
// }

// let readlineSync = require("readline-sync");

// while(true){
//     console.log("Welcome to the school");
//     console.log("Press 1 to add");
//     console.log("Press 2 to display");
//     console.log("Press 3 to update");
//     console.log("Press 4 to delete");
//     console.log("\n");

//     let choice = readlineSync.question("Enter your choice: ");

//     if(choice === '1'){
//         let rec = {};
//         rec.addno = readlineSync.question("Enter addmission number: ");
//         rec.name = readlineSync.question("Enter name: ");
//         rec.gender = readlineSync.question("Enter gender: ");
//         rec.type = readlineSync.question("Enter fees type: ");
//         addrec(rec, school);
//         console.log("Added record successfully", school, "\n");
//     } else if (choice === '2') {
//         let acc = readlineSync.question("Enter addmission number: ");
//         display(school, acc);
     
//     } else if(choice === '3'){
//         let addno = readlineSync.question("Enter addmission number: ");
//         let name = readlineSync.question("Enter new name: ");
//         let gender = readlineSync.question("Enter gender: ");
//         let type = readlineSync.question("Enter fees type: ");
//         update(school,addno, name, gender, type);
//         console.log(school);
//     } else if(choice === '4'){
//         let acc = readlineSync.question("Enter addmission number: ");
//         deleteRecord(school, acc);
//         console.log(school);
//     }
// let ch = readlineSync.question("Do you want to continue? ")
// if(ch == "no"){
//     break;
// }
// else{
//     continue;
//     }
// }

// function addNumbers(a, b) {
//     let sum = a + b;
//     console.log(sum);
//     return sum;
// }


addNumbers(5, 10);
 multiply_numbers(x, y);
    product = x * y
    return
    print(product)

multiply_numbers(4, 5)