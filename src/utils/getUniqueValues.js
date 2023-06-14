export function getUniqueValues(arrayObj, keyObj) {
  const uniqueValues = arrayObj
    .map((element) => element[keyObj])
    .filter((element, index, array) => array.indexOf(element) === index);

  return uniqueValues;
}
