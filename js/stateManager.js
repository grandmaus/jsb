class stateManager {
  /**
   * @param {{x: Array, y: Array}} data
   * @param {Function} callback
   */
  constructor (data, callback) {
    this.data = data;
    this.callback = callback;
  }

  handler = {
    get: (target, prop) => {
    console.log('>');
      if(['x', 'y'].includes(prop)) {
        setTimeout(() => this.callback(), 0);
        return Reflect.get(target, prop);
      }
    }
  };

  subscribe = new Proxy(data, this.handler);

  setData(valueX, valueY) {
    const { x, y } = this.subscribe;
    x.push(valueX);
    y.push(valueY);
  };
}
