import React from "react";

function ModalWindowWrapper(Component) {
  class ModalWindow extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        visible: false
      };
    }

    showModal = () => {
      this.setState({
        visible: true
      });
    };

    handleCancel = () => {
      this.setState({
        visible: false
      });
    };

    render() {
      return (
        <Component
          {...this.props}
          visible={this.state.visible}
          showModal={this.showModal}
          hideModal={this.handleCancel}
        />
      );
    }
  }
  return ModalWindow;
}

export default ModalWindowWrapper;
