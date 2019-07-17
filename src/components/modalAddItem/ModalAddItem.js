import React from "react";
import "./ModalAddItem.css";
import { Button, Modal, input, Select } from "antd";
import ModalWindowWrapper from "../../hocs/ModalWindowWrapper.js";

const { Option } = Select;

const ModalAddItem = ({ visible, hideModal, showModal }) => {
  return (
    <div className="modal-add-item">
      <Button className="button-header" type="primary" onClick={showModal}>
        Добавить товар
      </Button>
      <Modal
        title="Добавить товар?"
        visible={visible}
        centered={true}
        onCancel={hideModal}
        footer={[
          <Button key="submit" onClick={hideModal}>
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
};

export default ModalWindowWrapper(ModalAddItem);
