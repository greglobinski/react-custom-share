import React from 'react';

export default function asyncShareLoading(
  getComponent,
  loadingComponent = <div>Loading...</div>
) {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = { Component: null };
    }

    componentDidMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          this.setState({
            Component: Component.default,
          });
        });
      }
    }

    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return loadingComponent;
    }
  }

  return AsyncComponent;
}
