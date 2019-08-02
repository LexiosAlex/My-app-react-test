const deleteCategory = (id, categoriesData) => {
  return categoriesData.filter(item => item.categoryId !== +id);
};

export default deleteCategory;
