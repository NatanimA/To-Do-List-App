/**
 * @jest-environment jsdom
 */
import TasksObject from '../modules/tasksObject.js';
import LocalStorage from '../modules/localStorage.js'

describe("Test for describtion update and Status update", () => {

    test('should update description of the content', () => {
        
        const tasks = new TasksObject('Celebrate', false, 0);
        LocalStorage.addToLocalDataStorage(tasks);
        LocalStorage.updateContent(0,"Hello Friend");
        const todo = LocalStorage.getFromLocalStorage();
        expect(todo).toEqual([{
            description: 'Hello Friend',
            completed: false,
            index: 0,
        }])  
    });

    test('should update status of the task', () => {
        const tasks = new TasksObject('Game of thrones', false, 1);
        LocalStorage.addToLocalDataStorage(tasks);
        LocalStorage.updateStatus(1);
        const todo = LocalStorage.getFromLocalStorage();
        expect(todo[1]).toEqual({
            description: 'Game of thrones',
            completed: true,
            index: 1,
        })  
        
    });

})