import buildVendors from '../components/vendor/vendorList';
import displayRides from '../components/displayRides/displayRides';
import displayVisitors from '../components/visitor/visitor';

const createListeners = () => {
  $('body').on('click', '#navbar-vendors', buildVendors.buildVendorList);
  $('body').on('click', '.rideLink', displayRides.buildRideModule);
  $('body').on('click', '.visitorLink', displayVisitors.printVisitor);
};

export default {
  createListeners,
};
