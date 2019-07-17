const categoriesSorter = (data, categories) => {
  categories.forEach(it => {
    it.items = [];

    it.items = data.filter(item => item.categoryId === it.categoryId);
  });

  return categories;
};

export default categoriesSorter;
