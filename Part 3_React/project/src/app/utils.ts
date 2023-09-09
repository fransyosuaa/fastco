export const getNRandomData = (data: any, n: number) => {
  const dt = [...data];
  const result = [];
  for (let i = 0; i < n; i++) {
    const randomIdx = Math.floor(Math.random() * (100 - i));
    result.push(dt[randomIdx]);
    dt.splice(randomIdx, 1);
  }

  return result;
};
