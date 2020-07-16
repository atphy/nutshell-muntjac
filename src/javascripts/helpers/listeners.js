import buildVendors from '../components/vendor/vendorList';
import displayRides from '../components/displayRides/displayRides';

const createListeners = () => {
  $('body').on('click', '#navbar-vendors', buildVendors.buildVendorList);
  $('body').on('click', '.rideLink', displayRides.buildRideModule);
};

export default {
  createListeners,
};
