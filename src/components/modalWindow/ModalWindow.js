import React from "react";
import "./ModalWindow.css";
import { Button, Icon, Modal, input, Select } from "antd";

const { Option } = Select;

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

  handleSave = () => {
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

      case "add-item":
        return (
          <div className="modal-delete-confirm--category">
            <Button
              className="button-header"
              type="primary"
              onClick={this.showModal}
            >
              Добавить товар
            </Button>
            <Modal
              title="Добавить товар?"
              visible={this.state.visible}
              centered={true}
              onCancel={this.handleCancel}
              footer={[
                <Button key="submit" onClick={this.handleSave}>
                  Сохранить
                </Button>
              ]}
            >
              <div className="modal-window-body-container">
                <Select
                  placeholder="Категория"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: "250px",
                    width: "100%",
                    marginTop: "20px"
                  }}
                >
                  <Option value="categoryId1">Категория 1</Option>
                  <Option value="categoryId2">Категория 2</Option>
                  <Option value="categoryId3">Категория 3</Option>
                </Select>
                <input placeholder={"Название"} />
                <input placeholder={"Закупочная цена"} />
                <input placeholder={"Розничная цена"} />
              </div>
            </Modal>
          </div>
        );

      case "add-category":
        return (
          <div className="modal-delete-confirm--category">
            <Button
              className="button-header"
              type="primary"
              onClick={this.showModal}
            >
              Добавить категорию
            </Button>
            <Modal
              title="Добавить категорию?"
              visible={this.state.visible}
              centered={true}
              onCancel={this.handleCancel}
              footer={[
                <Button key="submit" onClick={this.handleSave}>
                  Сохранить
                </Button>
              ]}
            >
              <input placeholder={"Название"} />
            </Modal>
          </div>
        );
    }
  }
}

export default ModalWindow;
