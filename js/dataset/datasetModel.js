export default class DatasetModel {
  constructor() {
    this.data = [];
  };

  setData(x, y) {
    this.data.push({x, y});
  }

  deleteValue(index, count) {
    this.data.splice(index, count);
  }

  clearData() {
    this.data = [];
  }

  getData() {
    return this.data;
  }
}
