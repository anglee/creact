const commonUtils = {
  delay: (ms: number) =>
    new Promise(resolve => {
      setTimeout(resolve, ms);
    }),
};

export default commonUtils;
