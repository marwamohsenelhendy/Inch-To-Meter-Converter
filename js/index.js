let inputValue = document.getElementById ('input')
let converterHead = document.querySelector ('.converter-head')

function calculate() {
    let inputValue = (document.getElementById('input').value);
    let result = inputValue * 0.0254;
    document.querySelector('.converter-head').textContent = inputValue + ' inches ' + ' = ' + result + ' meter';
  }