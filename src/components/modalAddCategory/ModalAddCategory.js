import React from "react";
import "./ModalAddCategory.css";
import { Button, Modal, input } from "antd";
import ModalWindowWrapper from "../../hocs/ModalWindowWrapper";

const ModalAddCategory = ({
  visible,
  hideModal,
  showModal,
  addCategoryHandle,
  categories
}) => {
  const addCategory = name => {
    // if (name.length > 1) {
    //   addCategoryHandle(this.categories, name);
    // }
    addCategoryHandle(categories, "abc");
    hideModal();
  };

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
          <Button key="submit" onClick={addCategory}>
            Сохранить
          </Button>
        ]}
      >
        <input placeholder={"Название"} />
      </Modal>
    </div>
  );
};

export default ModalWindowWrapper(ModalAddCategory);
