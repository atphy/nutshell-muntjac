import utils from '../../helpers/utils';

const addSelector = () => {
  if (utils.dataSelector() === 'staff') {
    $('#add-button').addClass('show-staff-form');
  } else if (utils.dataSelector() === 'rides') {
    $('#add-button').addClass('createRideBtn');
  } else if (utils.dataSelector() === 'visitors') {
    $('#add-button').addClass('add-vis-form');
  } else if (utils.dataSelector() === 'vendors') {
    $('#add-button').addClass('add-vendor');
  }
};

const printAddButton = () => {
  const domString = '<div class="check-auth"><button class="btn btn-primary" id ="add-button">Add<i class="fas fa-plus ml-1"></i></button></div>';
  utils.printToDom('#add-button', domString);
  addSelector();
};

export default { printAddButton };
