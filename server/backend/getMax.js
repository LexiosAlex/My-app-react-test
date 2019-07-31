export default (items, fieldName) => Math.max(...items.map(i => i[fieldName]));
