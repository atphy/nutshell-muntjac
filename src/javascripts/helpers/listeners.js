import buildVendors from '../components/vendor/vendorList';
import displayRides from '../components/ride/displayRides/displayRides';
import deleteRide from '../components/ride/deleteRide/deleteRide';

const createListeners = () => {
  $('body').on('click', '#navbar-vendors', buildVendors.buildVendorList);
  $('body').on('click', '.rideLink', displayRides.buildRideModule);
  $('body').on('click', '.deleteRideIcon', deleteRide.deleteRide);
};

export default {
  createListeners,
};
