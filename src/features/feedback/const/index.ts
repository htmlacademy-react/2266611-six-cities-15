const RATINGS: { value: string; title: string }[] = [
  {
    value: '5',
    title: 'perfect'
  },
  {
    value: '4',
    title: 'good'
  },
  {
    value: '3',
    title: 'not bad'
  },
  {
    value: '2',
    title: 'badly'
  },
  {
    value: '1',
    title: 'terribly'
  },
];

const CommentLength = {
  Min: 50,
  Max: 300
} as const;

export { RATINGS, CommentLength };
