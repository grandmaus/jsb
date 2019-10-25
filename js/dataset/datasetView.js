import StateManager from '../stateManager.js';
import DatasetController from "./datasetController.js";

const stateManager = new StateManager();
const datasetController = new DatasetController(stateManager);

export default class DatasetView {
  constructor() {
    this.container = document.querySelector('#datasetBody');
    this.form = document.querySelector('.dataset-form');
    this.fieldX = document.querySelector('#datasetX');
    this.fieldY = document.querySelector('#datasetY');
    this.buttonAdd = document.querySelector('.dataset-form__add');
    this.render = this.render.bind(this)
  };

  deleteRow(e) {
    const target = e.target;
    const rowIndex = target.closest('tr').rowIndex - 1;
    target.closest('tr').remove();
    datasetController.localState.splice(rowIndex, 1);
    stateManager.update(datasetController.localState);
  };

  render(data) {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }

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
  };

  init() {
    stateManager.subscribe(this.render);
    this.buttonAdd.addEventListener('click', (e) => {
      e.preventDefault();
      datasetController.setValue(this.fieldX.value, this.fieldY.value);
      if(datasetController.isValid) {
        this.fieldX.value = '';
        this.fieldY.value = '';
        this.form.classList.remove('invalid');
      } else {
        this.form.classList.add('invalid');
      }
    });
  };
}
