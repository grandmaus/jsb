import DatasetController from "./datasetController.js";
import { getDatasetTemplate } from './datasetCommonView.js';
import { clearContainer } from '../utils.js';

const datasetController = new DatasetController();

export default class DatasetView {
  constructor(target) {
    this.target = target;
    this.getTemplate();
    this.container = document.querySelector('#datasetBody');
    this.form = document.querySelector('.dataset-form');
    this.fieldX = this.form.querySelector('#datasetX');
    this.fieldY = this.form.querySelector('#datasetY');
    this.buttonAdd = this.form.querySelector('.dataset-form__add');
    this.buttonClearAll = document.querySelector('.dataset-output__clear');
    this.getDataRows = this.getDataRows.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.init();
  };

  getTemplate() {
    document.querySelector(this.target).insertAdjacentHTML('beforeend', getDatasetTemplate());
  }

  deleteRow(e) {
    const target = e.target;
    const rowIndex = target.closest('tr').rowIndex - 1;
    target.closest('tr').remove();
    datasetController.deleteValue(rowIndex, 1);
  };

  clearAll() {
    clearContainer(this.container);
    datasetController.clearData();
    this.buttonClearAll.classList.remove('dataset-output__clear--show');
  }

  getDataRows(data) {
    clearContainer(this.container);

    const fragment = document.createDocumentFragment();

    const rows = data.reduce((result, item) => {
      const row = document.createElement('tr');
      const cellX = document.createElement('td');
      const cellY = document.createElement('td');
      const cellButton = document.createElement('td');
      const buttonDelete = document.createElement('button');

      buttonDelete.setAttribute('type', 'button');
      buttonDelete.addEventListener('click', this.deleteRow);
      buttonDelete.textContent = 'Delete';
      buttonDelete.classList.add('dataset-output__delete');

      cellX.textContent = item.x;
      cellY.textContent = item.y;

      cellButton.appendChild(buttonDelete);
      row.appendChild(cellX);
      row.appendChild(cellY);
      row.appendChild(cellButton);
      result.appendChild(row);

      return result;
    }, fragment);

    this.container.appendChild(rows);
    this.buttonClearAll.classList.add('dataset-output__clear--show');
  };

  init() {
    this.buttonAdd.addEventListener('click', (e) => {
      e.preventDefault();
      datasetController.setValue(this.fieldX.value, this.fieldY.value).then(this.getDataRows);

      if(datasetController.isValid) {
        this.fieldX.value = '';
        this.fieldY.value = '';
        this.form.classList.remove('invalid');
      } else {
        this.form.classList.add('invalid');
      }
    });

    this.buttonClearAll.addEventListener('click', this.clearAll);
  };
}
