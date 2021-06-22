'use strict';


const input = document.getElementById('input');

const btnTranslate = document.getElementById('btn-translate');

const output = document.getElementById('output');

const url = 'https://api.funtranslations.com/translate/minion.json';

// FUNCTION
const translateUrl = function(text){
  return `${url}?text=${text}`;
}

const translate = async function(text){
  const data = await fetch(translateUrl(text));
  const result = await data.json();
  output.innerText = result.contents.translated;
}

btnTranslate.addEventListener('click', () => {
  let uText = input.value;
  translate(uText);
});


