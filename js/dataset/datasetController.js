import DatasetModel from "./datasetModel.js";
import { validatePattern } from '../utils.js';

const model = new DatasetModel();

export default class DatasetController {
  constructor() {
    this.isValid = true;
  };

  setValue(x, y) {
    return new Promise((resolve, reject) => {
      if(validatePattern.test(x) && validatePattern.test(y)) {
        model.setData(x, y);
        this.isValid = true;
        resolve(model.data);
      } else {
        this.isValid = false;
        reject('Invalid');
      }
    });
  };

  deleteValue(index, count) {
    model.data.splice(index, count);
  }

  clearData() {
    model.data = [];
  }
}
