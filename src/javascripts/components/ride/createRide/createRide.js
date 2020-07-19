import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import utils from '../../../helpers/utils';

const addARide = () => {
  console.error('hm');
  const newRideObj = {
    name: $('#new-coaster-name').val(),
    description: $('#new-coaster-description').val(),
    isAvailable: $('#newOperationalCheck').prop('checked'),
  };
  console.error(newRideObj);
};

const showRideForm = () => {
  const domString = `
  <div class="closeForm">
  <i class="fas fa-window-close closeForm mb-1"></i>
  </div>
  <form id="new-coaster-form">
  <div class="form-group">
  <label for="new-coaster-name">Name:</label>
  <input type="text" class="form-control" id="new-coaster-name" placeholder="Name" required>
  </div>
  <div class="custom-file">
  <input type="file" class="custom-file-input" id="coaster-image">
  <label class="custom-file-label" for="coaster-image" id="pin-image-label">Choose file</label>
  </div>
  <div class="form-group">
  <label for="new-coaster-description">Description:</label>
  <input type="text" class="form-control" id="new-coaster-description" placeholder="Description" required>
  </div>
  <div class="form-check">
  <input type="checkbox" class="form-check-input" id="newOperationalCheck">
  <label class="form-check-label" for="newOperationalCheck">Operational</label>
  </div>
  <button type="submit" class="btn btn-primary">Create</button>
  </form>
`;
  utils.printToDom('.rideForm', domString);
  $('#new-coaster-form').on('submit', addARide);
};

export default {
  showRideForm,
  addARide,
};
