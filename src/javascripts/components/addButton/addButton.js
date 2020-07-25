import utils from '../../helpers/utils';

const addSelector = () => {
  if (utils.dataSelector() === 'staff') {
    $('#add-button').addClass('show-staff-form');
  } else {
    $('#add-button').addClass('createRideBtn');
  }
};

const printAddButton = () => {
  const domString = '<div class="check-auth"><button class="btn btn-primary" id ="add-button">Add<i class="fas fa-plus ml-1"></i></button></div>';
  utils.printToDom('#add-button', domString);
  addSelector();
};

export default { printAddButton };
