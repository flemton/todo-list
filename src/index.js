import './style.css';
import showLists from '../modules/showLists';
import recordList from '../modules/recordLists';
import clearAll from '../modules/clearAll';

if (!JSON.parse(localStorage.getItem('todo-list'))) {
  localStorage.setItem('todo-list', JSON.stringify([]));
}
showLists();

const listForm = document.querySelector('.add-list');

listForm.addEventListener('submit', recordList);

const clearBtn = document.querySelector('#clear-all');
clearBtn.addEventListener('submit', clearAll);