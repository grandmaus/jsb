const data = {
  x: [],
  y: []
};

class DatasetController {
  constructor() {
    this.container = document.querySelector('#datasetBody');
    this.form = document.querySelector('.dataset-form');
    this.fieldX = this.form.querySelector('#datsetX');
    this.fieldY = this.form.querySelector('#datsetY');
    this.buttonAdd = document.querySelector('.dataset-form__add');
    this.render = this.render.bind(this);
  };

  setValue(e) {
    e.preventDefault();
    if(this.fieldX.value !== '' && this.fieldY.value !== '') {
      state.setData(this.fieldX.value, this.fieldY.value);
    }
  };



  deleteRow(e) {
    e.target.parentNode.parentNode.remove();
  }

  render() {
    const fragment = document.createDocumentFragment();
    const row = document.createElement('tr');
    const cellX = document.createElement('td');
    const cellY = document.createElement('td');
    const cellButton = document.createElement('td');
    const buttonDelete = document.createElement('button');

    buttonDelete.setAttribute('type', 'button');
    cellButton.addEventListener('click', this.deleteRow);
    buttonDelete.textContent = 'Delete';
    cellX.textContent = data.x[data.x.length - 1];
    cellY.textContent = data.y[data.y.length - 1];

    cellButton.appendChild(buttonDelete);
    row.appendChild(cellX);
    row.appendChild(cellY);
    row.appendChild(cellButton);
    fragment.appendChild(row);

    this.container.appendChild(fragment)
  };

  init() {
    this.buttonAdd.addEventListener('click', (e) => this.setValue(e));
  };
}

const dataset = new DatasetController();
const state = new stateManager(data, dataset.render);

dataset.init();
