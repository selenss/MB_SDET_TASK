const fs = require("fs");

module.exports = {
  getRandomArrayIndex: function (len) {
    return Math.floor(Math.random() * (len - 1 - 0 + 1));
  },
};
