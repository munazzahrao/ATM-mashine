import inquirer from "inquirer";

let myBalance = 15000;
let myPin = 8542;

let pinAnswer = await inquirer.prompt(
    [{
name: "pin",
message: "enter your pin code",
type: "number",
}]
);
 
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [{
            name: "operation",
            message: "plz select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }]
    );
    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [{
                name: "amount",
                message: "enter your amount",
                type: "number",
            }]
        );
        (myBalance -= amountAns.amount);

        console.log("your remaining balance is: " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
    console.log("your balance is: " + myBalance);
}
}
else {
    console.log("incorrect pin code!!!");
};