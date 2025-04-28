export function addToIndex (index, langData, codeName) {
  const codes = langData[codeName]
  if (!codes) return
  for (const code of codes) {
    if (index[code] == null) {
      index[code] = [ langData ]
    } else if (!index[code].includes(langData)) {
      index[code].push(langData)
    }
  }
}
