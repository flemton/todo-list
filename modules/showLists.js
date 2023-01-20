/* eslint-disable  import/no-cycle */

import completed from './completed.js';
import editLists from './editList.js';

const listSection = document.querySelector('.todo-list');

export default function showLists() {
  const storedListData = JSON.parse(localStorage.getItem('todo-list')) || [];
  let status = '';
  listSection.innerHTML = '';
  storedListData.forEach((Task) => {
    if (Task.completed === true) {
      status = 'checked';
    } else {
      status = '';
    }
    listSection.innerHTML += `
    <li class="${Task.completed}">
    <input class="to-do-input" type="checkbox" id="${Task.index}" ${status}>
    <input class="strikethrough editable-input" index="${Task.index}" type="text" value="${Task.description}">
    <i class="fa-solid fa-trash trash" index="${Task.index}"></i>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    </li>
    <hr>`;
  });
  completed();
  editLists();
}
