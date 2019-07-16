import React from "react";
import "./ModalWindow.css";
import { Button, Icon, Modal } from "antd";

class ModalWindow extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

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
    const { type, id } = this.props;

    switch (type) {
      case "del-category":
        return (
          <div className="modal-delete-confirm--category">
            <Button type="primary" onClick={this.showModal}>
              <Icon type="close" />
            </Button>
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
          </div>
        );

      case "item-delete":
        return (
          <div className="modal-delete-confirm--category">
            <Button type="primary" onClick={this.showModal}>
              Удалить
            </Button>
            <Modal
              title={`Точно удалить товар id${id}?`}
              visible={this.state.visible}
              centered={true}
              okText={"Да"}
              onOk={this.handleOk}
              cancelText={"Нет"}
              onCancel={this.handleCancel}
            />
          </div>
        );
    }
  }
}

export default ModalWindow;
