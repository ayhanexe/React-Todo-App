export default class DataService {
  getData = () =>
    new Promise((resolve, reject) => {
      try {
        const data = require("../../data/todo.json");
        
        resolve(data.todos);
      } catch (_) {
        reject(new Array());
      }
    });
}
