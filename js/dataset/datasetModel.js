export default class DatasetModel {
  constructor() {
    this.data = [];
  };

  setData(x, y) {
    this.data.push({x, y});
  }
}
