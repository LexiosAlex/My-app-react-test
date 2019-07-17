import { Button, Modal } from "antd";
import React from "react";
import "./ModalDeleteItem.css";
import ModalWindowWrapper from "../../hocs/ModalWindowWrapper";

const ModalDeleteItem = ({ visible, hideModal, showModal, id }) => {
  return (
    <div className="modal-delete-item">
      <Button type="primary" onClick={showModal}>
        Удалить
      </Button>
      <Modal
        title={`Точно удалить товар id${id}?`}
        visible={visible}
        centered={true}
        okText={"Да"}
        onOk={hideModal}
        cancelText={"Нет"}
        onCancel={hideModal}
      />
    </div>
  );
};

export default ModalWindowWrapper(ModalDeleteItem);
