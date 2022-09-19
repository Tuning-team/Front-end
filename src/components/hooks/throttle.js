const throttling = (callback, delay) => {
  let timer = null;
  return (arg) => {
    if (timer === null) {
      timer = setTimeout(() => {
        callback(arg);
        timer = null;
      }, delay);
    }
  };
};
