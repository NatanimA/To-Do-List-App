export default class LocalDataStorage {
  static addToLocalDataStorage = (tasks) => {
    localStorage.setItem('todo',JSON.stringify(tasks))
  }
}
