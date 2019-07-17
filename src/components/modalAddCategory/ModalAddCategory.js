import React from "react";
import "./ModalAddCategory.css";
import { Button, Modal, input } from "antd";
import ModalWindowWrapper from "../../hocs/ModalWindowWrapper";

const ModalAddCategory = ({ visible, hideModal, showModal }) => {
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
          <Button key="submit" onClick={hideModal}>
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
