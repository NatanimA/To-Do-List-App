/* eslint-disable max-classes-per-file */
import './index.css';

import TasksObject from './modules/tasksObject.js';
import WindowLoader from './modules/windowsLoader.js';
import LocalDataStorage from './modules/localStorage.js';
import CreateTasks from './modules/createTasks.js';

const textInput = document.querySelector('.input-form');

const tasks = [];

textInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && textInput.value) {
    const taskObject = new TasksObject(textInput.value, false, tasks.length);
    tasks.push(taskObject);
    CreateTasks.createTask();
    const content = document.querySelectorAll('.content');
    for (let index = 0; index < content.length; index += 1) {
      content[index].textContent = tasks[index].description;
    }

    textInput.value = null;
    LocalDataStorage.addToLocalDataStorage(tasks);
  }
});

const localData = JSON.parse(localStorage.getItem('todo'));

localData.forEach((element) => {
  tasks.push(element);
});

WindowLoader.loadWindow();
