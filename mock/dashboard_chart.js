function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [20, 40, 50, 40, 60, 40];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
