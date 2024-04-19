#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000 ;
let myPin = 8800 ;
let pinAnswer = await inquirer.prompt([
{
    name: "pin",
    message:"Enter your pin",
    type: "number",
}

]);

if (pinAnswer.pin === myPin){
    console.log("correct pin code!!");
    
    let operationAns =await inquirer.prompt([{

        name:"operation",
        message:"please select option",
        type:"list",
        choices:["withdraw","check balance"],
    }

    ]);

console.log(operationAns);


    if(operationAns.operation === "withdraw"){
        let withdrawAns = await inquirer.prompt([
            {
              name:"withrawMethod",
              message:"selec a withrawal Method",
              type:"list",
              choices:["Fastcash", "Enter amount"]
            }

        ])
        if(withdrawAns.withrawMethod === "Fastcash"){
            let fastCashAns =await inquirer.prompt([
                {
                    name:"FastCash",
                    message:"select amount",
                    type:"list",
                    choices:[1000,2000,5000,10000,20000,25000]
                }
            ]);

            if(fastCashAns.FastCash > myBalance ){
                console.log("insufficient Balance");

            }
            else{
                myBalance -= fastCashAns.FastCash
                console.log(`${fastCashAns.fastCash} withdraw successfully`);
                console.log(`your remaining balance is:${myBalance}`)
            }

        }
        else if(withdrawAns.withrawMethod === "Enter amount"){
            let amountAns = await inquirer.prompt([
            {
                name:"amount",
                message:"Enter your amount",
                type:"number"
            }

        ]);
        if(amountAns.amount > myBalance){
            console.log("insufficient Balance")
        }
else{
        myBalance -= amountAns.amount;
        
        console.log("your remaining balance is:"  + myBalance);
}

        }
        
 }else if(operationAns.operation === "check balance"){
        console.log("your balance is:" + myBalance)
    }

}
else{
    console.log("incorrect pin code!!")
}