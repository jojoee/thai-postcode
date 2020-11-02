const thaiPostCode = {
  /**
   *
   * @param {string} postcode
   * @returns {boolean}
   */
  isValid: function (postcode = '') {
    return true
  },

  /**
   *
   * @param {string} postcode
   * @param {Object}
   */
  get: function () {
    return {}
  },

  /**
   * @param {Object}
   */
  random: function () {
    return {}
  }
}

if (typeof module !== 'undefined' &&
  module.exports != null) {
  module.exports = thaiPostCode
  exports.default = thaiPostCode
}
