import utils from '../../helpers/utils';

const printAddButton = () => {
  const domString = '<div class="check-auth"><button class="btn btn-primary">Add<i class="fas fa-plus ml-1"></i></button></div>';
  utils.printToDom('#add-button', domString);
};

export default { printAddButton };
