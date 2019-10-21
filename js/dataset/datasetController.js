class DatasetController {
  constructor(stateManager) {
    this.localState = [];
    this.stateManager = stateManager;
  };

  setValue(x, y) {
    if(x.value !== '' && y.value !== '') {
      this.localState.push({x, y})
    }
    this.stateManager.update(this.localState);
  };
}

const stateManager = new StateManager();
const datasetController = new DatasetController(stateManager);
