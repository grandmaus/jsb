export default class StateManager {
  constructor() {
    this.observers = [];
    this._state = [];
  };

  subscribe(fn) {
    this.observers.push(fn);
  };

  unsubscribe(fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn)
  };

  get state() {
    return this._state;
  };

  update(newState) {
    if(JSON.stringify(this._state) !== JSON.stringify(newState)) {
      this._state = [...newState];
      this.observers.forEach(subscriber => subscriber(this._state));
    }
  };
}
