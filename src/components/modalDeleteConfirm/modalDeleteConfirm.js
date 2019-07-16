import React from "react";

import { Modal } from "antd";

class ModalDeleteConfirm extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { visible: false };

  componentWillReceiveProps() {
    this.setState({ visible: this.props.visible });
  }

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
        centered={true}
        okText={"Да"}
        onOk={this.handleOk}
        cancelText={"Нет"}
        onCancel={this.handleCancel}
      >
        <p>Все товары в этой категории будут помечены "Без категории"</p>
      </Modal>
    );
  }
}

export default ModalDeleteConfirm;
