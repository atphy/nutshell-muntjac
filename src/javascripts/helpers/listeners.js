import buildVendors from '../components/vendor/vendorList';
import displayRides from '../components/ride/displayRides/displayRides';
import displayVisitors from '../components/visitor/visitor';
import removeVisitor from '../components/visitor/deleteVisitor';
import deleteRide from '../components/ride/deleteRide/deleteRide';
import buildStaff from '../components/staff/staffList';

const createListeners = () => {
  $('body').on('click', '#navbar-vendors', buildVendors.buildVendorList);
  $('body').on('click', '.rideLink', displayRides.buildRideModule);
  $('body').on('click', '.visitorLink', displayVisitors.printVisitor);
  $('body').on('click', '#remove-visitor', removeVisitor.deleteVisitor);
  $('body').on('click', '.deleteRideIcon', deleteRide.deleteRide);
  $('body').on('click', '#navbar-staff', buildStaff.buildStaffModule);
};

export default {
  createListeners,
};
