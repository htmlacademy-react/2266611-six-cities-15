const capitalizeFirstLetter = (word: string) => `${word[0].toUpperCase()}${word.slice(1)}`;

const calculateRatingPercent = (rating: number) => {
  const total = 5;
  return Math.round(rating) / total * 100;
};

export { capitalizeFirstLetter, calculateRatingPercent };
