import initialComponent from './initialComponent';
import ShitElement from './ShitElement';
import { ShitComponent } from './types';

interface Config {
  [propName: string]: any;
}

class Shit {
  rootID: number = 0;
  _rootWrapper: HTMLElement;
  constructor() {}

  render(node: any, wrapper: HTMLElement) {
    const instance = initialComponent(node, wrapper);
    const elementTree = (instance as ShitComponent).mount(this.rootID++);
    this._rootWrapper = wrapper;
    wrapper.appendChild(elementTree);
  }

  createElement(type: string | Function, config: Config) {
    const props = {};
    const key = config.key || null;

    for(let propName in config) {
      props[propName] = config[propName];
    }

    return new ShitElement(type, props, key);
  }
}

export default new Shit();
