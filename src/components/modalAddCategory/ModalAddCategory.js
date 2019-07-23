import React from "react";
import "./ModalAddCategory.css";
import { Button, Modal, input } from "antd";
import ModalWindowWrapper from "../../hocs/ModalWindowWrapper";

class ModalAddCategory extends React.Component {
  state = {
    inputValue: ""
  };
  addCategory = name => {
    const { addCategoryHandle, categories, hideModal } = this.props;
    if (name.length > 0) {
      addCategoryHandle(categories, name);
    }

    this.setState.inputValue = "";
    hideModal();
  };
  render() {
    const { visible, hideModal, showModal } = this.props;

    return (
      <div className="modal-add-category">
        <Button className="button-header" type="primary" onClick={showModal}>
          Добавить категорию
        </Button>
        <Modal
          title="Добавить категорию?"
          visible={visible}
          centered={true}
          onCancel={hideModal}
          footer={[
            <Button
              key="submit"
              onClick={() => {
                this.addCategory(this.state.inputValue);
              }}
            >
              Сохранить
            </Button>
          ]}
        >
          <input
            placeholder={"Название"}
            value={this.state.inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
          />
        </Modal>
      </div>
    );
  }
}

export default ModalWindowWrapper(ModalAddCategory);
