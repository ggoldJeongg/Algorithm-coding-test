const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (id) => {
    console.log(id + "??!");
    readline.close();
});