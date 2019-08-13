import React from "react";
import "./Category.css";
import { Button, Row } from "antd";
import ModalDeleteCategory from "../modalDeleteCategory/ModalDeleteCategory.js";

class Category extends React.Component {
  render() {
    const {
      category,
      changeCategory,
      activeCategory,
      page,
      onDeleteCategory
    } = this.props;

    return (
      <Row className="category">
        {category.id !== 0 && (
          <ModalDeleteCategory
            onDeleteCategory={onDeleteCategory}
            id={category.id}
            activeCategory={activeCategory}
            page={page}
          />
        )}
        <Button
          className={
            category.id === 0
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
