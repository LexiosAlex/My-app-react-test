const filterActiveCategoryItems = (categoryId, items) => {
  return items ? items.filter(it => it.categoryId === categoryId) : []
};



export default filterActiveCategoryItems;
