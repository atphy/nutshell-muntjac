import utils from '../../helpers/utils';

const printModButtons = () => {
  const domString = `
  <div class="check-auth">
    <button class="btn btn-warning edit-staff mx-1">Edit</button>
    <button class="btn btn-danger delete-staff mx-1">Delete</button>
  </div>`;
  utils.printToDom('.mod-buttons', domString);
};

export default { printModButtons };
