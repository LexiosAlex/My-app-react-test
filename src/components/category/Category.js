import React from "react";
import "./Category.css";
import { Button, Row } from "antd";
import ModalWindow from "../modalWindow/ModalWindow.js";

class Category extends React.Component {
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
        <ModalWindow type={"del-category"} />
        <Button className={"category__main-btn"} type="link">
          {category.categoryName}
        </Button>
      </Row>
    );
  }
}

export default Category;
