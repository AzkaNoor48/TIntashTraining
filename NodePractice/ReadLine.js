console.log("hello I am startinh Node JS");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let n1 = 2;
let n2 = 7;
let sum = n1 + n2;

rl.question(`What do you think ${n1}+${n2}? `, (inp) => {
    if (inp.trim() == sum) {
        rl.close();
    }
    else {
        rl.setPrompt("Try again\n");
        rl.prompt();
        rl.on('line', (inp) => {
            if (inp.trim() == sum) {
                console.log("Correct!!!\n");
                rl.close();
            }
            else {
                rl.setPrompt("Not Correct!!!\n");
                rl.prompt();
            }
        })

    }

});

rl.on('close', () => {
    console.log("Correct!!!\n");
})