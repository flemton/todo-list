export default class AddList {
  constructor(input) {
    this.description = input;
    this.completed = false;
    this.index = 1;
  }
}

export function indexter() {
  const restoredListData = JSON.parse(localStorage.getItem('todo-list'));
  function setIndex(item, index) {
    item.index = index + 1;
  }
  restoredListData.forEach(setIndex);

  localStorage.setItem('todo-list', JSON.stringify(restoredListData));
}