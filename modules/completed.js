export default function completed() {
  const toDoInputBox = document.querySelectorAll('.to-do-input');
  toDoInputBox.forEach((element) => {
    element.addEventListener('click', (e) => {
      const restoredListData = JSON.parse(localStorage.getItem('todo-list'));
      const Element = e.target;
      const Id = Element.id;
      if (Element.checked === true) {
        restoredListData[Id - 1].completed = true;
      } else {
        restoredListData[Id - 1].completed = false;
      }
      localStorage.setItem('todo-list', JSON.stringify(restoredListData));
    });
  });
}