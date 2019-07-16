import React from "react";
import "./Category.css";
import { Button, Icon, Row } from "antd";
import ModalDeleteConfirm from "../modalDeleteConfirm/modalDeleteConfirm.js";

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    const { category } = this.props;

    if (category.categoryTitle === "noCategory") {
      return (
        <Row className="category">
          <Button
            className="category__main-btn category__main-btn--no-category"
            type="link"
          >
            {category.categoryName}
          </Button>
        </Row>
      );
    }
    return (
      <Row className="category">
        <Button type="primary" onClick={this.showModal}>
          <Icon type="close" />
        </Button>
        <Button className={"category__main-btn"} type="link">
          {category.categoryName}
        </Button>
        <ModalDeleteConfirm visible={this.state.visible} />
      </Row>
    );
  }
}

export default Category;
