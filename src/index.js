/* eslint-disable max-classes-per-file */
import './index.css';

const toDoList = document.querySelector('#todo-lists');

const tasks = [
  {
    index: 5,
    description: 'Meskel holiday celebration with family',
    completed: false,
  },

  {
    index: 4,
    description: 'Learn Javascript Es6',
    completed: false,
  },

  {
    index: 3,
    description: 'Be active on linked in and seek job opportunities',
    completed: false,
  },

  {
    index: 2,
    description: 'Read a book a minimum of 10 pages',
    completed: false,
  },

  {
    index: 1,
    description: 'Go to the gym and workout',
    completed: false,
  },
];

class CreateTasks {
    static create = (add) => {
      const task = document.createElement('li');
      task.innerHTML += `<input type="checkbox" name="complete" class="complete"
        ${add.completed ? 'complete' : ''}>
        <p> ${add.description}</p>
        <i class="fa-solid fa-ellipsis-vertical"></i>`;

      toDoList.appendChild(task);
    }
}

class DisplayTasks {
    static displayTask = () => {
      tasks.sort(((a, b) => a.index - b.index));
      tasks.forEach((add) => {
        CreateTasks.create(add);
      });
    }
}

DisplayTasks.displayTask();
