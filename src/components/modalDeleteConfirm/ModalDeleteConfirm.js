import React from "react";
import "./ModalDeleteConfirm.css";
import { Modal } from "antd";

class ModalDeleteConfirm extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { visible: false };

  componentWillReceiveProps() {
    this.setState({ visible: this.props.visible });
  }

  handleOk = () => {
    this.setState({
      visible: false
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Modal
        title="Хотите удалить категорию?"
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
