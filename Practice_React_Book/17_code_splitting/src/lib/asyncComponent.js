import React, { Component } from 'react';

export default function asycnComponent(getComponent) {
  return class AsyncComponent extends Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    constructor(props) {
      super(props);
      if(AsyncComponent.Component) return;

      getComponent().then(({default: Component}) => {
        AsyncComponent.Component = Component;
        this.setState({Component});
      });
    }

    render() {
      const { Component } = this.state;
      if(Component) {
        return <Component {...this.props} />
      };
      return null;
    };
  };
};