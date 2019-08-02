import { Button, Modal } from "antd";
import React from "react";
import "./ModalDeleteItem.css";
import ModalWindowWrapper from "../../hocs/ModalWindowWrapper";

class ModalDeleteItem extends React.Component {
  render() {
    const {
      visible,
      hideModal,
      showModal,
      product,
      activeCategory,
      page,
      onDeleteProduct
    } = this.props;
    return (
      <div className="modal-delete-item">
        <Button type="primary" onClick={showModal}>
          Удалить
        </Button>
        <Modal
          title={`Точно удалить товар id${product.id}?`}
          visible={visible}
          centered={true}
          okText={"Да"}
          onOk={() => {
            onDeleteProduct(product.id, activeCategory, page);
            hideModal();
          }}
          cancelText={"Нет"}
          onCancel={hideModal}
        />
      </div>
    );
  }
}

export default ModalWindowWrapper(ModalDeleteItem);
