export function generateId() {
  let target = "_0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZY";
  let src, len = 8, index, result = "";
  for(let i = 0; i < len; i++) {
    index = Math.floor(Math.random() * target.length);
    src = [...target][index];
    result += src;
  }
  return result;
}