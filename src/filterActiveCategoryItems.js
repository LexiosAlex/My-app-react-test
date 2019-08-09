const filterActiveCategoryItems = (categoryId, items) => {
  return items ? items.filter(it => it.categoryId === categoryId).map((item, index) => ({...item, key: index})) : []
};

export default filterActiveCategoryItems;
