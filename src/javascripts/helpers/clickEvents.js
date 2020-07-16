import displayRides from '../components/displayRides/displayRides';

const displayRidesClick = () => {
  displayRides.buildRideModule();
};

const allClickEvents = () => {
  $('body').on('click', '.rideLink', displayRidesClick);
};

export default {
  allClickEvents,
};
