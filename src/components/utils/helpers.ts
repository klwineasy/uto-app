// Help turn number into thousdans divider
export const numberWithCommas = (num: number) => {
  let parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let kyats = ' K' + parts.join('.');
  return kyats;
};
