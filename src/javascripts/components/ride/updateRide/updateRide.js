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
  console.error(rideId);
  const domString = 'hello';
  utils.printToDom(`#${rideId}footer`, domString);
};

export default {
  fixRide,
  updateRideForm,
};
