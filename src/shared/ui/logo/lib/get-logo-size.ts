export const getLogoSize = (type: string) => {
  if (type === 'header') {
    return {
      width: 81,
      height: 41,
    };
  }

  return {
    width: 64,
    height: 33
  };
};
