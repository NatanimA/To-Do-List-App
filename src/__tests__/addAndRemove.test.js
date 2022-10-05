/**
 * @jest-environment jsdom
 */
import TasksObject from '../modules/tasksObject.js';
import LocalStorage from '../modules/localStorage.js'

describe('Addition and removal of the task from local storage', () => {
    test('Check add Tasks to localStorage', () => {
        const tasks = new TasksObject('Celebrate',false,0);
        LocalStorage.addToLocalDataStorage(tasks);
        const todo = LocalStorage.getFromLocalStorage();
        expect(todo).toEqual([{
            description: 'Celebrate',
            completed: false,
            index: 0,
        }]);
    });

    test('Check Removal of tasks', () => {
        LocalStorage.removeFromLocalDataStorage('Celebrate');
        const toDos = LocalStorage.getFromLocalStorage();
        expect(toDos).toEqual([]);
    });
});




