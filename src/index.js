/* eslint-disable max-classes-per-file */
import './index.css';

const toDoList = document.querySelector('#todo-lists');
const toDoSection = document.querySelector('.todo');
const textInput = document.querySelector('.input-form');
const clearBtn = document.querySelector('button');

class TasksObject {
  constructor(description,completed,index){
    this.description=description;
    this.completed=completed;
    this.index = index;
  }
}

const tasks = [];


class CreateTasks {
    static create = (add) => {
      const task = document.createElement('li');
      task.className = "todo-list-container";
      task.innerHTML += `<input type="checkbox" class="checkbox" name="complete">
        <span>${add}</span>
        <i class="dots fa-solid fa-ellipsis-vertical"></i>
        <i class="alt-fa fa-solid fa-trash"></i>`;
      toDoList.appendChild(task);

      const checkbox = document.querySelectorAll('.checkbox');
      checkbox.forEach( item => {
        item.addEventListener('click', () => {
          item.parentElement.classList.toggle('checked-holder');
          item.nextElementSibling.classList.toggle('line-through');
          item.parentElement.lastChild.classList.toggle('trash-active');
          item.parentElement.firstElementChild.nextElementSibling.nextElementSibling.classList.toggle('dots-remove');
        })
      });

      const classObject = new TasksObject(add,false,checkbox.length -1);
      tasks.push(classObject);
      localStorage.setItem('todo',JSON.stringify(tasks));

      const editTask = document.querySelectorAll('.dots');
      editTask.forEach( item => {
        item.addEventListener('click', () => {
          console.log(item);
          EditList.editList(task,item.previousElementSibling);
        })
      });

      const remove = document.querySelectorAll('alt-fa');

      remove.forEach( item => {
        item.addEventListener('click', () => {
          RemoveList.removeTodoList(item.parentElement);
          tasks.splice(item.index, 1);
          localStorage.setItem('todo', JSON.stringify(tasks));
        })
      })

    }
}

class RemoveList {
  static removeTodoList = (list) => {
    toDoList.removeChild(list);
    let counter = 0;
    const localData = JSON.parse(localStorage.getItem('todo'));
    const data = Array.from(localData).filter(item => item.completed === false);
    data.map(item => item.index = counter += 1);
    localStorage.setItem('todo',JSON.stringify(data));
  }
}

class EditList {
  static editList = (task,text) => {
    const editInput = document.createElement('input');
    editInput.type ='text';
    editInput.className = 'edit-list-input';
    editInput.value = text.textContent;
    task.replaceChild(editInput, text);
    editInput.addEventListener('keypress', e => {
      if(e.key == 'Enter'){
        const tasks = document.querySelectorAll('.todo-list-container');
        const localData = JSON.parse(localStorage.getItem('todo'));

        for(let i = 0; i<tasks.length ; i += 1){
          if (tasks[i].classList.contains('checked-holder')) {
            localData[i].description = editInput.value;
            localStorage.setItem('todo',JSON.stringify(localData));
          }
        }

        editInput.parentElement.classList.remove('checked-holder');
        task.replaceChild(text, editInput);
        text.textContent = editInput.value;
      }
    })
  }
}

textInput.addEventListener('keypress', e => {
  if(e.key === 'Enter' && textInput.value){
    CreateTasks.create(textInput.value);
    textInput.value= null;
  }
});

class DisplayTasks {
    static displayTask = () => {
      const localData = JSON.parse(localStorage.getItem('todo'));
      localData.map(item => {
        tasks.push(item);
        const task = document.createElement('li');
        task.className = "todo-list-container";
        task.innerHTML += `<input type="checkbox" class="checkbox" name="complete">
        <span>${item.description}</span>
        <i class="dots fa-solid fa-ellipsis-vertical"></i>
        <i class="alt-fa fa-solid fa-trash"></i>`;
        toDoList.appendChild(task);

        const editTask = document.querySelectorAll('.dots');
        editTask.forEach(item => {
          item.addEventListener('click', () => {
            console.log(item);
            EditList.editList(task, item.previousElementSibling);
          })
        });
      });

      const checkbox = document.querySelectorAll('.checkbox');
      checkbox.forEach(item => {
        item.addEventListener('click', () => {
          item.parentElement.classList.toggle('checked-holder');
          item.nextElementSibling.classList.toggle('line-through');
          item.parentElement.lastChild.classList.toggle('trash-active');
          item.parentElement.firstElementChild.nextElementSibling.nextElementSibling.classList.toggle('dots-remove');
        })
      });

      const remove = document.querySelectorAll('alt-fa');

      remove.forEach(item => {
        item.addEventListener('click', () => {
          RemoveList.removeTodoList(item.parentElement);
          tasks.splice(item.index,1);
          localStorage.setItem('todo',JSON.stringify(tasks));
        })
      })

      localStorage.setItem('todo', JSON.stringify(tasks));

    }
}

DisplayTasks.displayTask();
