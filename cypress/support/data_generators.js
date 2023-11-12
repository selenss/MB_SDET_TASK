const fs = require("fs");

module.exports = {
  generateRandomString: function (str = null) {
    if (str !== null) {
      return `${str}${Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 5)}_Auto`;
    } else {
      return `Auto_${Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 5)}`;
    }
  },

  generateRandomNumber: function () {
    return Math.floor(Math.random() * 100) + 10;
  },

  generateRandomNumberBetweenEdges: function (max) {
    var number = Math.floor(Math.random() * (max - 1) + 1);
    return number;
  },

  generateRandomTestCaseId: function () {
    return (
      "qa-" +
      Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 5) +
      "-" +
      Math.floor(Math.random() * 100) +
      10
    );
  },

  generateRandomAlphaNumericValue: function (length) {
    var result = "";
    var allChars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var allCharsLength = allChars.length;
    for (var i = 0; i < length; i++) {
      result += allChars.charAt(Math.floor(Math.random() * allCharsLength));
    }
    return `${result}`;
  },

  generateRandomEmail: function () {
    return `auto${Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5)}@auto.com`;
  },

  generateRandomNumericValue: function (length) {
    var result = "";
    var numbers = "0123456789";
    for (var i = 0; i < length; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result;
  },

  generateRandomPassword: function () {
    var result = "";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var passLength = 8;
    for (var i = 0; i < passLength; i++) {
      result += lowerChars.charAt(Math.floor(Math.random() * passLength));
      result += upperChars.charAt(Math.floor(Math.random() * passLength));
      result += numericChars.charAt(Math.floor(Math.random() * passLength));
    }
    return result;
  },

  getMultipleRandomValue: function (arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  },

  getRandomArrayIndex: function (len) {
    return Math.floor(Math.random() * (len - 1 - 0 + 1)) + 0;
  },
};
