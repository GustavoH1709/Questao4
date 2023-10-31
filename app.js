function encryptThis(value) {
  if (typeof value !== "string") {
    throw new Error();
  }

  value = value.trim();

  if (!value.length) {
    throw new Error();
  }

  const split = value.split(" ");

  const encodedArray = [];

  for (let current of split) {
    let part = "";

    const length = current.length;

    if (length == 1) {
      part += current.charCodeAt(0);
    }

    if (length == 2) {
      part += `${current.charCodeAt(0)}${current[1]}`;
    }

    if (length >= 3) {
      let temp = current.split("");

      const secondChar = current[1];
      const lastChar = current.at(-1);

      temp[0] = current.charCodeAt(0);
      temp[1] = lastChar;
      temp[current.length - 1] = secondChar;

      part = temp.join("");
    }

    encodedArray.push(part);
  }

  return encodedArray.join(" ");
}

module.exports = encryptThis;
