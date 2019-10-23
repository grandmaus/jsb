export default class StateManager {
  constructor() {
    this.observers = [];
  };

  #state = [];

  subscribe(fn) {
    this.observers.push(fn);
  };

  unsubscribe(fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn)
  };

  get state() {
    return this.#state;
  };

  update(newState) {
    if(JSON.stringify(this.#state) !== JSON.stringify(newState)) {
      this.#state = [...newState];
      this.observers.forEach(subscriber => subscriber(this.#state));
    }
  };
}
