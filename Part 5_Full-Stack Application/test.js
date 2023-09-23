const arr = [10, 20, 30, 40, 20, 20, 50, 20];

let result = arr.map(function (value) {
  if (value === 20) {
    return value;
  }
});
// result -> [20]
console.log({ result });
result = arr.forEach(function (value) {
  if (value === 20) {
    return value;
  }
});
// result -> 20
console.log({ result });

result = arr.find(function (value) {
  if (value === 20) {
    return value;
  }
});
// result -> 20
console.log({ result });

result = arr.filter(function (value) {
  if (value === 20) {
    return value;
  }
});
// result -> [20]
console.log({ result });
