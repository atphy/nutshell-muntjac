import rideData from '../../../helpers/data/rideData';
import displayRide from '../displayRides/displayRides';

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

export default {
  fixRide,
};
