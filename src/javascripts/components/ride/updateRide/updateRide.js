import rideData from '../../../helpers/data/rideData';
import displayRide from '../displayRides/displayRides';
import utils from '../../../helpers/utils';
import auth from '../../../helpers/data/authData';
import './updateRide.scss';

const updateRideForm = (e) => {
  const rideId = e.target.closest('.card').id;
  $('.createRideBtn').addClass('hide');
  rideData.getRides()
    .then((rides) => {
      const rideById = rides.find((singleRide) => singleRide.id === rideId);
      const domString = `
        <div class="closeForm">
        <i class="fas fa-window-close closeForm mb-1"></i>
        </div>
        <h5 class="homeH3 mb-0 text-left">Update Ride</h5>
        <form>
        <div class="form-group mb-0">
        <label for="coaster-name" class="mb-0">Name:</label>
        <input type="text" class="form-control" id="coaster-name" maxlength="20" value="${rideById.name}">
        </div>
        <div class="form-group mb-0">
        <label for="coaster-image" class="mb-0 mt-1">Image URL:</label>
        <input type="text" class="form-control" id="coaster-image" value="${rideById.imageUrl}">
        </div>
        <div class="form-group mb-0">
        <label for="coaster-description" class="mb-0 mt-1">Description:</label>
        <input type="text" class="form-control" id="coaster-description" maxlength="80" value="${rideById.description}">
        </div>
        <div class="form-group mb-0">
        <label for="coaster-price" class="mb-0 mt-1">Price:</label>
        <input type="number" class="form-control" id="coaster-price" min=".5" max="10" step=".5" value="${rideById.price}">
        </div>
        </div>
        <button type="button" class="btn btn-primary updateSubmit mt-2" data-rideid="${rideById.id}">Update</button>
        </form>
  `;
      utils.printToDom('.rideForm', domString);
    })
    .catch((err) => (err));
};

const updateRide = () => {
  if (!auth.isAuthenticated()) return;
  const rideId = $('.updateSubmit').data('rideid');
  const updatedRideObj = {
    name: $('#coaster-name').val(),
    description: $('#coaster-description').val(),
    imageUrl: $('#coaster-image').val(),
    price: $('#coaster-price').val(),
    staffAssigned: $('#coaster-staff').val(),
    isAvailable: $('#coaster-staff').val() > 1,
  };
  rideData.updateRide(rideId, updatedRideObj)
    .then(() => displayRide.buildRideModule())
    .catch((err) => (err));
};

const clearForm = () => {
  $('.createRideBtn').removeClass('hide');
  const domString = '';
  utils.printToDom('.rideForm', domString);
};

export default {
  updateRideForm,
  updateRide,
  clearForm,
};
