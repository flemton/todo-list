import _ from 'lodash';
import './style.css';

const Tasks = [
    {
        description: "wash the dishes",
        completed: true,
        index: 0
    },
    {
        description: "complete To Do list project",
        completed: true,
        index: 1
    },
]

const listSection = document.querySelector('.todo-list');

Tasks.forEach((Task) => 
{
    const task = `
    <li id="${Task.index}" class="${Task.completed}">
    <input class="to-do-input" type="checkbox">
    <p>${Task.description}</p>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    </li>
    <hr>`
    listSection.innerHTML += task;

})