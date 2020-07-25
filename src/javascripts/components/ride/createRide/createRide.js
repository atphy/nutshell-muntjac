import firebase from 'firebase/app';
import auth from '../../../helpers/data/authData';
import 'firebase/storage';
import 'firebase/auth';
import utils from '../../../helpers/utils';
import rideData from '../../../helpers/data/rideData';
import displayRides from '../displayRides/displayRides';

const addARide = () => {
  if (!auth.isAuthenticated()) return;
  const file = $('#coaster-image')[0].files[0];
  const image = file.name;
  const ref = firebase.storage().ref(`Ride/${image}`);
  const newRideObj = {
    name: $('#new-coaster-name').val(),
    description: $('#new-coaster-description').val(),
    imageUrl: '',
    price: $('#new-coaster-price').val(),
    staffAssigned: $('#new-coaster-staff').val(),
    isAvailable: $('#new-coaster-staff').val() > 1,
  };
  ref.put(file).then(() => {
    ref.getDownloadURL().then((url) => {
      newRideObj.imageUrl = url;
      rideData.addNewRide(newRideObj)
        .then(() => displayRides.buildRideModule());
    });
  })
    .catch((err) => (err));
};

function imageInputWatcher() {
  $('#coaster-image-label').html(this.files[0].name);
}

const showRideForm = () => {
  if (!auth.isAuthenticated()) return;
  $('.createRideBtn').addClass('hide');
  const domString = `
  <div class="closeForm">
  <i class="fas fa-window-close closeForm mb-1"></i>
  </div>
  <h5 class="homeH3 mb-0 text-left">Create Ride</h5>
  <form id="new-coaster-form">
  <div class="form-group">
  <label for="new-coaster-name" class="mb-0">Name:</label>
  <input type="text" class="form-control" id="new-coaster-name" placeholder="Name" required>
  </div>
  <div class="custom-file">
  <input type="file" class="custom-file-input" id="coaster-image" required>
  <label class="custom-file-label" for="coaster-image" id="coaster-image-label">Upload Coaster Image</label>
  </div>
  <div class="form-group mb-0">
  <label for="new-coaster-description" class="mb-0 mt-1">Description:</label>
  <input type="text" class="form-control" id="new-coaster-description" placeholder="Description" required>
  </div>
  <div class="form-group mb-0">
  <label for="new-coaster-price" class="mb-0 mt-1">Price:</label>
  <input type="float" class="form-control" id="new-coaster-price" placeholder="$" required>
  </div>
  <label for="new-coaster-staff" class="mb-0 mt-1">Staff Count:</label>
  <input type="float" class="form-control" id="new-coaster-staff" placeholder="# of assigned staff" required>
  </div>
  <button type="submit" class="btn btn-primary mt-2">Create</button>
  </form>
`;
  utils.printToDom('.rideForm', domString);
  $('#new-coaster-form').on('submit', addARide);
};

export default {
  showRideForm,
  addARide,
  imageInputWatcher,
};
