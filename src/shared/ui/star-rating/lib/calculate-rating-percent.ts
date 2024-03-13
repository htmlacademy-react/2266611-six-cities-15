const TOTAL_STARS_COUNT = 5;

const calculateRatingPercent = (rating: number) => Math.round(rating) / TOTAL_STARS_COUNT * 100;

export { calculateRatingPercent };
