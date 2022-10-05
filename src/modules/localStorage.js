export default class LocalDataStorage {
  static getFromLocalStorage() {
    let tasks;
    if (localStorage.getItem('test') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('test'));
    }
    return tasks;
  }

  static addToLocalDataStorage(tasks) {
    const task = LocalDataStorage.getFromLocalStorage();
    task.push(tasks);
    localStorage.setItem('test', JSON.stringify(task));
    localStorage.setItem('todo', JSON.stringify(tasks));
  }

  static removeFromLocalDataStorage(desc) {
    const tasks = LocalDataStorage.getFromLocalStorage();
    const filter = tasks.filter((task) => task.description !== desc);

    for (let index = 0; index < filter.length; index += 1) {
      filter[index].index = index;
    }

    localStorage.setItem('test', JSON.stringify(filter));
  }
}
