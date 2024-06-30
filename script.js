let question = ''
const display = document.querySelector("input")

function makeQuestion (input) {
    question += input
    display.value = question
}

function calculate () {
    question = question.replace("^", "**")
    let answer = eval(question)
    display.value = answer
    console.log(answer)
    question = ''
}

function Clear () {
    display.value = ''
    console.log(display.value)
    question = ''
}

function deleteChar () {
    console.log(question)
    question = question.slice(0, question.length - 1)
    display.value = question
}