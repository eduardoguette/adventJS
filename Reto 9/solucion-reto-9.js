function groupBy(collection, it) {
  let result = {};
  collection.forEach((el) => {
    let name
    (typeof it === 'string') ? name = [el[it]] : name = it(el)
    result[name] = result[name] ? [...result[name], el] : [el];
  });
  return result;
}
console.log(groupBy(['one', 'two', 'three'], 'length'))// { 3: ['one', 'two'], 5: ['three'] }