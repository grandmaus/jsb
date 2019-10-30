import DatasetController from './datasetController.js';

const controllerInstance = new DatasetController();

describe('DatasetController', () => {
  test('should reject a promise and set isValid as false', (done) => {
    controllerInstance.setValue('abc', '2').catch((error) => {
      expect(error).toMatch('Invalid');
      expect(controllerInstance.isValid).toBe(false);
      done();
    });
  });

  test('should reject a promise and set isValid as false', (done) => {
    controllerInstance.setValue('1', 'abc').catch((error) => {
      expect(error).toMatch('Invalid');
      expect(controllerInstance.isValid).toBe(false);
      done();
    });
  });

  test('should reject a promise and set isValid as false', (done) => {
    controllerInstance.setValue('abc', '').catch((error) => {
      expect(error).toMatch('Invalid');
      expect(controllerInstance.isValid).toBe(false);
      done();
    });
  });

  test('should resolve a promise and set isValid as true', (done) => {
    controllerInstance.setValue('1', '2').then((data) => {
      expect(data).toStrictEqual([{x: '1', y: '2'}]);
      expect(controllerInstance.isValid).toBe(true);
      done();
    });
  });
});
