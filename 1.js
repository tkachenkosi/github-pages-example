
console.log('test 0')

function sayHello() {
    const username = document.querySelector('#username')
    const userInput = prompt('Как тебя зовут?', 'Аноним')
    username.textContent = userInput
}

console.log('test 1')
document.querySelector('button').addEventListener('click', sayHello)
