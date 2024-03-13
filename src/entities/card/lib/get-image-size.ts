export const getImageSize = (sectionName: string) => {
  if (sectionName === 'favorites') {
    return {
      width: 150,
      height: 110
    };
  }

  return {
    width: 260,
    height: 200
  };
};
