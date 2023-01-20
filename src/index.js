import './style.css';
import showLists from '../modules/showLists';
import recordList from '../modules/recordLists';

showLists();

const listForm = document.querySelector('.add-list');

listForm.addEventListener('submit', recordList);