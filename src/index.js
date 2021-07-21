
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  return Math.min(...array);
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  let sum = 0;
  const length = array.length;
  for (let i = 0; i < length; i++) {
    sum += array[i];
  }
  return sum / length;
}
