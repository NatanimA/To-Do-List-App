const toDoList = document.querySelector('#todo-lists');
const clearBtn = document.querySelector('button');

export default class CreateTasks {
    static createTask = () => {
      const task = document.createElement('div');
      task.className = 'todo-list-container';
      toDoList.appendChild(task);
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const content = document.createElement('p');
      content.className = 'content';
      const dots = document.createElement('i');
      dots.className = 'dots fa-solid fa-ellipsis-vertical';
      const trash = document.createElement('i');
      trash.className = 'alt-fa fa-solid fa-trash';

      task.append(checkbox, content, dots, trash);

      checkbox.addEventListener('click', () => {
        task.classList.toggle('checked-holder');
        content.classList.toggle('line-through');
        trash.classList.toggle('trash-active');
        dots.classList.toggle('dots-remove');

        const localData = JSON.parse(localStorage.getItem('todo'));
        const filter = [];
        const taskChecked = document.querySelectorAll('.todo-list-container');
        for (let i = 0; i < localData.length; i += 1) {
          if (taskChecked[i].classList.contains('checked-holder')) {
            localData[i].completed = true;
          } else {
            localData[i].completed = false;
          }

          filter.push(localData[i]);
          localStorage.setItem('todo', JSON.stringify(filter));
        }
      });

      clearBtn.addEventListener('click', () => {
        const localData = JSON.parse(localStorage.getItem('todo'));
        const checkedTasks = document.querySelectorAll('.checked-holder');
        const filter = [];
        for (let i = 0; i < checkedTasks.length; i += 1) {
          toDoList.removeChild(checkedTasks[i]);
        }
        for (let i = 0; i < localData.length; i += 1) {
          if (localData[i].completed !== true) {
            filter.push(localData[i]);
          }
        }
        localStorage.setItem('todo', JSON.stringify(filter));
      });

      trash.addEventListener('click', () => {
        toDoList.removeChild(task);
        const localData = JSON.parse(localStorage.getItem('todo'));
        const filteredResult = localData.filter((item) => item.description === content.textContent);
        const filter = [];

        for (let index = 0; index < localData.length; index += 1) {
          if (filteredResult[0].description !== localData[index].description) {
            filter.push(localData[index]);
          }
        }
        let i = 0;
        while (i < filter.length) {
          filter[i].index = i;
          i += 1;
        }

        localStorage.setItem('todo', JSON.stringify(filter));
      });

      dots.addEventListener('click', () => {
        const editor = document.createElement('input');
        editor.type = 'text';
        editor.className = 'contentEditor';
        editor.style.background = '#fff';
        task.style.background = '#fff';

        editor.value = content.textContent;
        task.replaceChild(editor, content);

        editor.addEventListener('keypress', (e) => {
          if (e.key === 'Enter' && editor.value) {
            const localData = JSON.parse(localStorage.getItem('todo'));
            let filteredResult = [];

            for (let index = 0; index < localData.length; index += 1) {
              if (localData[index].description === content.textContent) {
                filteredResult = localData[index];
                break;
              }
            }

            const filter = [];

            for (let i = 0; i < localData.length; i += 1) {
              if (localData[i].index === filteredResult.index) {
                localData[i].description = editor.value;
              }
              filter.push(localData[i]);
              localStorage.setItem('todo', JSON.stringify(filter));
            }
            window.location.reload();
          }
        });
      });
    }
}