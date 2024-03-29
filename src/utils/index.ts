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

export const getCurrentTime = () => {
  const date = new Date();

  return `${fillZeroToTwoLength(date.getHours())}:${fillZeroToTwoLength(date.getMinutes())}`;
};

export const getRandom = (min: number, max: number) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);
