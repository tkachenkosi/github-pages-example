
/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.

Кнопка очистки имеет класс clear. При клике на неё весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/

let display = document.querySelector('.display');
let clear = document.querySelector('.clear');
let keys = document.querySelectorAll('.key');

clear.onclick = function () {
  display.textContent = ""
}

let i = 0
for (key of keys) {
    // idx = '#index_' + i
    // console.log('1=>',i)

    // display.append(document.querySelector(idx).textContent)
  key.onclick = function (e) {
    display.append(this.textContent)


    // display.append(document.querySelector(keys[0].textContent).textContent)
    // display.append(e.target.textContent)

  }
    i++
}
