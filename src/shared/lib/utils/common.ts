const capitalizeFirstLetter = (word: string) => `${word[0].toUpperCase()}${word.slice(1)}`;

const getRandomItemsFromArray = <T>(arr: T[], count: number): T[] => [...arr].sort(() => Math.random() - 0.5).slice(0, count);
const getRandomItemFromArray = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export { capitalizeFirstLetter, getRandomItemsFromArray, getRandomItemFromArray };
