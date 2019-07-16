import React from "react";

import { Modal } from "antd";

class ModalDeleteConfirm extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { visible: this.props.visible };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Modal
        title="Basic Modal"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
  }
}

export default ModalDeleteConfirm;
