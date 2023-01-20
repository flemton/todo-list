import completed from "./completed";
import editLists from "./editList";

const listSection = document.querySelector('.todo-list');

export default function showLists() {
  const storedListData = JSON.parse(localStorage.getItem('todo-list')) || [];
  let status = '';
  listSection.innerHTML = '';
  storedListData.forEach((Task) => {
    if (Task.complete === true) {
      status = 'checked';
    } else {
      status = '';
    }
    listSection.innerHTML += `
    <li id="${Task.index}" class="${Task.completed}">
    <input class="to-do-input" type="checkbox">
    <p>${Task.description}</p>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    </li>
    <hr>`;
  });
  completed();
  editLists();
}