import DatasetController from './datasetController.js';
import StateManager from "../stateManager.js";

const stateManagerInstance = new StateManager();
const controllerInstance = new DatasetController(stateManagerInstance);


describe('DatasetController', () => {
  test('x not valid. isValid equals false', () => {
    controllerInstance.setValue('abc', '2');
    expect(stateManagerInstance.state).toStrictEqual([]);
    expect(controllerInstance.isValid).toBe(false)
  });

  test('y not valid. isValid equals false', () => {
    controllerInstance.setValue('1', '222');
    expect(stateManagerInstance.state).toStrictEqual([]);
    expect(controllerInstance.isValid).toBe(false)
  });

  test('x and y are not valid. isValid equals false', () => {
    controllerInstance.setValue('123', '321');
    expect(stateManagerInstance.state).toStrictEqual([]);
    expect(controllerInstance.isValid).toBe(false)
  });

  test('x and y are valid. isValid equals true', () => {
    controllerInstance.setValue('1', '2');
    expect(stateManagerInstance.state).toStrictEqual([{x: '1', y: '2'}]);
    expect(controllerInstance.isValid).toBe(true)
  });
});
