import React from "react";
import "./Category.css";
import { Button, Icon, Row } from "antd";

const Category = ({ category }) => {
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
      <Button type="primary">
        <Icon type="close" />
      </Button>
      <Button className={"category__main-btn"} type="link">
        {category.categoryName}
      </Button>
    </Row>
  );
};

export default Category;
