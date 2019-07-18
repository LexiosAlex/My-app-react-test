const addProductsToCategories = (data, categories) =>
  categories.map(category => ({
    ...category,
    items: data.filter(item => item.categoryId === category.categoryId)
  }));

export default addProductsToCategories;
