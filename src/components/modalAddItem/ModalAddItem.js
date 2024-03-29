import React from "react";
import "./ModalAddItem.css";
import { Button, Modal, input, Select } from "antd";
import ModalWindowWrapper from "../../hocs/ModalWindowWrapper.js";

const { Option } = Select;

class ModalAddItem extends React.Component {
  state = {
    inputValueCategory: "",
    inputValueName: "",
    inputValueWholePrice: "",
    inputValuePrice: ""
  };

  saveProduct = () => {
    const { hideModal, onAddProduct, activeCategoryId, activePage } = this.props;
    if (
      this.state.inputValueCategory > -1 &&
      this.state.inputValueName.length > 0 &&
      this.state.inputValueWholePrice.length > 0 &&
      this.state.inputValuePrice.length > 0
    ) {
      onAddProduct(
        this.state.inputValueCategory,
        this.state.inputValueName,
        this.state.inputValueWholePrice,
        this.state.inputValuePrice,
        activeCategoryId,
        activePage
      );
    }

    this.setState({
      inputValueName: "",
      inputValueWholePrice: "",
      inputValuePrice: ""
    });
    hideModal();
  };

  render() {
    const { visible, hideModal, showModal, categories } = this.props;
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
            <Button
              key="submit"
              onClick={() => {
                this.saveProduct();
              }}
            >
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
              onChange={e =>
                this.setState({
                  inputValueCategory: e
                })
              }
            >
              {categories.map((it, i) => (
                <Option key={`option-${i}`} value={it.id}>
                  {it.categoryName}
                </Option>
              ))}
            </Select>
            <input
              placeholder={"Название"}
              value={this.state.inputValueName}
              onChange={e => this.setState({ inputValueName: e.target.value })}
            />
            <input
              placeholder={"Закупочная цена"}
              value={this.state.inputValueWholePrice}
              onChange={e =>
                this.setState({ inputValueWholePrice: e.target.value })
              }
            />
            <input
              placeholder={"Розничная цена"}
              value={this.state.inputValuePrice}
              onChange={e => this.setState({ inputValuePrice: e.target.value })}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalWindowWrapper(ModalAddItem);
