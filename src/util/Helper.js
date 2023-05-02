export const splitDate = (date) => {
  let splitT = date.split('T');
  let splitStrip = splitT[0].split('-');
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${splitStrip[2]}  ${months[splitStrip[1] - 1]}  ${splitStrip[0]}`;
};
