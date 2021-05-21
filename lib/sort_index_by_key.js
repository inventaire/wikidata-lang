module.exports = index => {
  return Object.entries(index)
  .sort((a, b) => a[0] > b[0] ? 1 : -1)
  .reduce((obj, entry) => {
    obj[entry[0]] = entry[1]
    return obj
  }, {})
}
