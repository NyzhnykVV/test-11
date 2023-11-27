let sentence = ''
let timeout = 0

function show(){
    console.log(sentence.toUpperCase())
}

function AskUser(){
    const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    })
        readline.question("Введіть текст для переформатування у капс:", rl1 => {
        sentence = rl1
            readline.question("Введіть час для відтермінування функції(сек):", rl2 => {
            timeout = rl2
            timeout = timeout * 1000
            readline.close()
            setTimeout(show, timeout) 
            })
        })
}
AskUser()