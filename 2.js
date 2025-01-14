let bank = [];

function addrec(obj, A){
    A.push(obj);
}

function display(A, acc){
    for(let i = 0; i < A.length; i++){
        if(A[i].accno == acc){
            console.log("\n", A[i], "\n");
            return; 
        }
    }
    console.log("\nAccount not found.\n");
}

function update(A, acc, name, balance, type){
    for(let i = 0; i < A.length; i++){
        if(A[i].accno == acc){
            A[i].name = name;
            A[i].balance = balance;
            A[i].type = type;
            console.log("Successfully updated");
            return; 
        }
    }
}

function deleteRecord(A, acc){
    for(let i = 0; i < A.length; i++){
        if(A[i].accno == acc){
            A.splice(i, 1); 
            console.log("Successfully deleted");
        }
    }
}

let readlineSync = require("readline-sync");

while(true){
    console.log("Welcome to the bank");
    console.log("Press 1 to add");
    console.log("Press 2 to display");
    console.log("Press 3 to update");
    console.log("Press 4 to delete");
    console.log("\n");

    let choice = readlineSync.question("Enter your choice: ");

    if(choice === '1'){
        let rec = {};
        rec.accno = readlineSync.question("Enter account number: ");
        rec.name = readlineSync.question("Enter name: ");
        rec.balance = readlineSync.question("Enter balance: ");
        rec.type = readlineSync.question("Enter account type: ");
        addrec(rec, bank);
        console.log("Added record successfully", bank, "\n");
    } else if (choice === '2') {
        let acc = readlineSync.question("Enter account number: ");
        display(bank, acc);
     
    } else if(choice === '3'){
        let acc = readlineSync.question("Enter account number: ");
        let name = readlineSync.question("Enter new name: ");
        let balance = readlineSync.question("Enter balance: ");
        let type = readlineSync.question("Enter account type: ");
        update(bank, acc, name, balance, type);
        console.log(bank);
    } else if(choice === '4'){
        let acc = readlineSync.question("Enter account number: ");
        deleteRecord(bank, acc);
        console.log(bank);
    }
let ch = readlineSync.question("Do you want to continue? ")
if(ch == "no"){
    break;
}
else{
    continue;
    }
}