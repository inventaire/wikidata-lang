export function sortObjectByKey (obj) {
  return Object.entries(obj)
  .sort((a, b) => a[0] > b[0] ? 1 : -1)
  .reduce((sortedObj, entry) => {
    sortedObj[entry[0]] = entry[1]
    return sortedObj
  }, {})
}
