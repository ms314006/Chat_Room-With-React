export const fillZeroToTwoLength = (word: number) => {
  let result = String(word);
  if (result.length >= 2) {
    return result;
  }
  while (result.length < 2) {
    result = `0${result}`;
  }
  return result;
};