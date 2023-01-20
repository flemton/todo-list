import './style.css';
import showLists from '../modules/showLists.js';
import recordList from '../modules/recordLists.js';
import clearAll from '../modules/clearAll.js';

if (!JSON.parse(localStorage.getItem('todo-list'))) {
  localStorage.setItem('todo-list', JSON.stringify([]));
}
showLists();

const listForm = document.querySelector('.add-list');

listForm.addEventListener('submit', recordList);

const clearBtn = document.querySelector('#clear-all');
clearBtn.addEventListener('click', clearAll);