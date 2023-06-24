export function formatNumber(number) {
  let strNumber = String(number);

  const hasComma = strNumber.indexOf('.') !== -1;

  let [integerPart, decimalPart] = hasComma
    ? strNumber.split('.')
    : [strNumber, ''];

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const formattedNumber = hasComma
    ? `${integerPart}.${decimalPart}`
    : integerPart;

  return formattedNumber;
}
