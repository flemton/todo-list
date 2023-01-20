import { indexter } from './addList.js';
import showLists from './showLists.js';

export default function clearAll(e) {
  e.preventDefault();
  let restoredListData = JSON.parse(localStorage.getItem('todo-list'));
  restoredListData = restoredListData.filter((Task) => {
    if (Task.completed === false) {
      return true;
    }
    return false;
  });
  localStorage.setItem('todo-list', JSON.stringify(restoredListData));
  indexter();
  showLists();
}