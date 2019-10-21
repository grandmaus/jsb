class DatasetView {
  constructor() {
    this.container = document.querySelector('#datasetBody');
    this.form = document.querySelector('.dataset-form');
    this.fieldX = this.form.querySelector('#datasetX');
    this.fieldY = this.form.querySelector('#datasetY');
    this.buttonAdd = this.form.querySelector('.dataset-form__add');
    this.render = this.render.bind(this)
  };

  deleteRow(e) {
    const target = e.target;
    const rowIndex = target.closest('tr').rowIndex - 1;
    target.closest('tr').remove();
    stateManager.globalState.splice(rowIndex, 1);
  };

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

    stateManager.globalState.map(item => {
      cellX.textContent = item.x;
      cellY.textContent = item.y;
    });

    cellButton.appendChild(buttonDelete);
    row.appendChild(cellX);
    row.appendChild(cellY);
    row.appendChild(cellButton);
    fragment.appendChild(row);

    this.container.appendChild(fragment)
  };

  init() {
    stateManager.subscribe(this.render);
    this.buttonAdd.addEventListener('click', (e) => {
      e.preventDefault();
      datasetController.setValue(this.fieldX.value, this.fieldY.value);
    });
  };
}

const datasetView = new DatasetView();

datasetView.init();
