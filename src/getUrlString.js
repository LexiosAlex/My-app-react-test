const getUrlString = (categoryId, page) => {
  let stringArr = [];
  debugger;
  stringArr.push(categoryId ? `categoryId=${categoryId}` : ``);
  stringArr.push(page ? `page=${page}` : ``);
  return stringArr.join("&");
};

export default getUrlString;
