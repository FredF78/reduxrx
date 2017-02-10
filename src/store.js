import Rx from 'rxjs';

class Store {
  constructor(defaultState) {
    this.defaultState = defaultState;
  }
  createStore(defaultState) {
    this.defaultState = defaultState;
  }
  setState(state) {
    this.defaultState = state;
  }
}

export default Store;
