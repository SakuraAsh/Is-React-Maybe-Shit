interface HTMLNodeProps {
  children?: object[];
  [propName: string]: any;
}

interface CurrentElement {
  type: string;
  props: HTMLNodeProps;
  [propName: string]: any;
}

class HTMLNodeComponent {
  currentElement: CurrentElement;
  _nodeID: number;
  constructor(node: CurrentElement) {
    this.currentElement = node;
  }

  mount(id: number) {
    this._nodeID = id;
    const { props, type } = this.currentElement;
    const { children } = props;
    const wrapper = document.createElement(type);
    
    for (let prop in props) {
      if (prop === 'content') {
        const text = document.createTextNode(props[prop]);
        wrapper.appendChild(text);
      }

      if (prop === 'style' && typeof props[prop] === 'object') {
        const styles = props[prop];
        for (let attr in styles) {
          wrapper.style[attr] = styles[attr];
        }
      }

      // TODO: children
    }
    return wrapper;
  }
}

export default HTMLNodeComponent;