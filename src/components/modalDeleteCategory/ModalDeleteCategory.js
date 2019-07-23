import React from "react";
import "./ModalDeleteCategory.css";
import { Button, Modal, Icon } from "antd";
import ModalWindowWrapper from "../../hocs/ModalWindowWrapper";

const ModalDeleteCategory = ({
  visible,
  hideModal,
  showModal,
  onDeleteCategory,
  id
}) => {
  return (
    <div className="modal-delete-category">
      <Button type="primary" onClick={showModal}>
        <Icon type="close" />
      </Button>
      <Modal
        title="Хотите удалить категорию?"
        visible={visible}
        centered={true}
        okText={"Да"}
        onOk={() => {
          onDeleteCategory(id);
          hideModal();
        }}
        cancelText={"Нет"}
        onCancel={hideModal}
      >
        <p>Все товары в этой категории будут помечены "Без категории"</p>
      </Modal>
    </div>
  );
};

export default ModalWindowWrapper(ModalDeleteCategory);
