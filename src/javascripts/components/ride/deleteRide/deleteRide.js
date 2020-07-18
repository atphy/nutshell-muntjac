import rideData from '../../../helpers/data/rideData';
import buildRides from '../displayRides/displayRides';

const deleteRide = (e) => {
  const rideId = e.target.closest('.card').id;
  rideData.deleteRide(rideId)
    .then(() => {
      buildRides.buildRideModule();
    })
    .catch((err) => err);
};

export default {
  deleteRide,
};
