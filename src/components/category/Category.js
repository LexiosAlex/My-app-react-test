import React from "react";
import "./Category.css";
import { Button, Row } from "antd";
import ModalDeleteCategory from "../modalDeleteCategory/ModalDeleteCategory.js";

class Category extends React.Component {
  render() {
    const { category, changeCategory, onDeleteCategory } = this.props;

    return (
      <Row className="category">
        {category.categoryTitle !== "noCategory" && (
          <ModalDeleteCategory
            onDeleteCategory={onDeleteCategory}
            id={category.categoryId}
          />
        )}
        <Button
          className={
            category.categoryTitle === "noCategory"
              ? "category__main-btn category__main-btn--no-category"
              : "category__main-btn"
          }
          type="link"
          onClick={() => {
            changeCategory(category.categoryId);
          }}
        >
          {category.categoryName}
        </Button>
      </Row>
    );
  }
}

export default Category;
