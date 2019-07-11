function form(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = { message: "OK" };
      break;
    default:
      res = null;
  }
  return res;
}
module.exports = form;
