import { validatePattern } from '../utils.js';

export default class DatasetController {
  constructor(stateManager) {
    this.stateManager = stateManager;
    this.localState = [...stateManager.state];
    this.isValid = true;
  };

  setValue(x, y) {
    if(validatePattern.test(x) && validatePattern.test(y)) {
      this.localState.push({x, y});
      this.stateManager.update(this.localState);
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  };
}
