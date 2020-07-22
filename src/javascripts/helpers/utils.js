const printToDom = (selector, text) => {
  $(selector).html(text);
};

const signedOut = () => {
  const domString = '';
  printToDom('.check-auth', domString);
};

let selectedData = '';

const selector = (selected) => {
  selectedData = selected;
};

const dataSelector = () => selectedData;

export default {
  printToDom,
  signedOut,
  dataSelector,
  selector,
};
