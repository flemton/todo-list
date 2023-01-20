/* eslint-disable  import/no-cycle */

import showLists from './showLists.js';
import { indexter } from './addList.js';

export default function editLists() {
  const editForm = document.querySelectorAll('.editable-input');

  editForm.forEach((e) => {
    e.addEventListener('focusout', (e) => {
      const restoredListData = JSON.parse(localStorage.getItem('todo-list'));
      restoredListData[e.target.getAttribute('index') - 1].description = e.target.value;
      localStorage.setItem('todo-list', JSON.stringify(restoredListData));
      showLists();
    });
  });

  const deleteIcons = document.querySelectorAll('.fa-trash');
  deleteIcons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const restoredListData = JSON.parse(localStorage.getItem('todo-list'));
      const listIndex = e.target.getAttribute('index') - 1;
      restoredListData.splice(listIndex, 1);
      localStorage.setItem('todo-list', JSON.stringify(restoredListData));
      showLists();
      indexter();
    });
  });
}
