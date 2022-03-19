const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,

  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, (causes 2500.99 to be printed as $2,501)
});

const Utils = {
  numberToDollars: (value) => {
    try {
      return formatter.format(Math.round(value));
    } catch (ex) {
      return '-';
    }
  },

  numberToMillions: (value) => {
    try {
      return Math.round(value / 1000000);
    } catch (ex) {
      return '-';
    }
  },

  numberToBillions: (value) => {
    try {
      return Math.round(value / 1000000000);
    } catch (ex) {
      return '-';
    }
  },

  numberToPercentage: (value) => {
    try {
      return `${(parseFloat(value) * 100).toFixed(2)}%`;
    } catch (ex) {
      return '-';
    }
  },
};

module.exports = Utils;
