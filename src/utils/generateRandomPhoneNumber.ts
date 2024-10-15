export function generateRandomPhoneNumber() {
  const areaCode = Math.floor(100 + Math.random() * 900)

  const centralOfficeCode = Math.floor(100 + Math.random() * 900)

  const lineNumber = Math.floor(1000 + Math.random() * 9000)

  return `${areaCode}${centralOfficeCode}${lineNumber}`
}
