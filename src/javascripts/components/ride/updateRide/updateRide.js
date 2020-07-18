import rideData from '../../../helpers/data/rideData';
import displayRide from '../displayRides/displayRides';
import utils from '../../../helpers/utils';

const fixRide = (e) => {
  const rideId = e.target.dataset.brokenride;
  rideData.getRides()
    .then((rides) => {
      const rideById = rides.find((singleRide) => singleRide.id === rideId);
      const fixedRideObj = {
        name: rideById.name,
        description: rideById.description,
        imageUrl: rideById.imageUrl,
        isAvailable: true,
      };
      rideData.updateRide(rideId, fixedRideObj)
        .then(() => displayRide.buildRideModule());
    })
    .catch((err) => err);
};

const updateRideForm = (e) => {
  const rideId = e.target.closest('.card').id;
  rideData.getRides()
    .then((rides) => {
      const rideById = rides.find((singleRide) => singleRide.id === rideId);
      const domString = `
  <form>
  <div class="form-group">
    <label for="coaster-name">Name:</label>
    <input type="text" class="form-control" id="coaster-name" value="${rideById.name}">
  </div>
  <div class="form-group">
    <label for="coaster-image">Image URL:</label>
    <input type="text" class="form-control" id="coaster-image" value="${rideById.imageUrl}">
  </div>
  <div class="form-group">
  <label for="coaster-description">Description:</label>
  <input type="text" class="form-control" id="coaster-description" value="${rideById.description}">
</div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="operationalCheck">
    <label class="form-check-label" for="operationalCheck">Operational</label>
  </div>
  <button type="button" class="btn btn-primary updateSubmit" data-rideid="${rideById.id}">Update</button>
</form>
  `;
      utils.printToDom('.rideForm', domString);
    })
    .catch((err) => (err));
};

const updateRide = () => {
  const rideId = $('.updateSubmit').data('rideid');
  const updatedRideObj = {
    name: $('#coaster-name').val(),
    description: $('#coaster-description').val(),
    imageUrl: $('#coaster-image').val(),
    isAvailable: $('#operationalCheck').prop('checked'),
  };
  rideData.updateRide(rideId, updatedRideObj)
    .then(() => displayRide.buildRideModule())
    .catch((err) => (err));
};

export default {
  fixRide,
  updateRideForm,
  updateRide,
};
