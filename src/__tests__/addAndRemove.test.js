/**
 * @jest-environment jsdom
 */
import TasksObject from '../modules/tasksObject.js';
import LocalStorage from '../modules/localStorage.js'

describe('Addition and removal of the tasks', () => {
    test('Check add Tasks', () => {
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




