class StateManager {
  constructor() {
    this.observers = [];
    this.globalState = [];
  };

  subscribe(fn) {
    this.observers.push(fn);
  };

  unsubscribe(fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn)
  };

  update(newState) {
    if(JSON.stringify(this.globalState) !== JSON.stringify(newState)) {
      this.globalState = [];
      this.globalState.push(...newState);
      this.observers.forEach(subscriber => subscriber());
    }
  };
}
