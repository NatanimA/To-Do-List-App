import CreateTasks from "./createTasks.js";



export default class WindowLoader {

    static loadWindow = () => {
        window.addEventListener('load', () => {
            const localData = JSON.parse(localStorage.getItem('todo'));
            if(localData !== null){
                for (let index = 0; index < localData.length; index++) {
                    CreateTasks.createTask();
                    const content = document.querySelectorAll('.content');
                    content[index].textContent = localData[index].description;

                    if (localData[index].completed === true) {
                        localData[index].completed === false;
                    }

                    localStorage.setItem('todo', JSON.stringify(localData));
                }
            }
           
        })
    }
}