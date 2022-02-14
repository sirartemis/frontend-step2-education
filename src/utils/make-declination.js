const makeDividedNumbersIntoDigits = number => number.toString().split('');
const getFirstDigit = number => makeDividedNumbersIntoDigits(number).length - 1;
const makeDeclination = (declination, number) => {
  const units = makeDividedNumbersIntoDigits(number);
  const firstDigit = getFirstDigit(number);
  let result = '';
  switch (units[firstDigit]) {
    case '1':
      result = declination.he;
      break;
    case '2':
    case '3':
    case '4':
      result = declination.him;
      break;
    default:
      result = declination.their;
      break;
  }
  if (units[firstDigit - 1] === '1') result = declination.their;
  return result;
}

export default makeDeclination;
