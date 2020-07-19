import rideData from '../../../helpers/data/rideData';
import buildRides from '../displayRides/displayRides';
import auth from '../../../helpers/data/authData';

const deleteRide = (e) => {
  if (!auth.isAuthenticated()) return;
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
