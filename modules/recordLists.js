import AddList, { indexter } from './addList.js';
import showLists from './showLists.js';

const listInput = document.querySelector('#add-list');
const listForm = document.querySelector('.add-list');

function formReset() {
  listForm.reset();
}
export default function recordList(e) {
  e.preventDefault();
  const lists = JSON.parse(localStorage.getItem('todo-list')) || [];
  lists.push(new AddList(listInput.value));
  localStorage.setItem('todo-list', JSON.stringify(lists));
  indexter();
  showLists();
  formReset();
}