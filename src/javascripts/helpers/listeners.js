import buildVendors from '../components/vendor/vendorList';
import displayRides from '../components/ride/displayRides/displayRides';
import displayVisitors from '../components/visitor/visitor';
import removeVisitor from '../components/deleteVisitor/deleteVisitor';
import deleteRide from '../components/ride/deleteRide/deleteRide';
import buildStaff from '../components/staff/staffList';
import updateRide from '../components/ride/updateRide/updateRide';

const createListeners = () => {
  $('body').on('click', '#navbar-vendors', buildVendors.buildVendorList);
  $('body').on('click', '.rideLink', displayRides.buildRideModule);
  $('body').on('click', '.visitorLink', displayVisitors.printVisitor);
  $('body').on('click', '#remove-visitor', removeVisitor.deleteVisitor);
  $('body').on('click', '.deleteRideIcon', deleteRide.deleteRide);
  $('body').on('click', '#navbar-staff', buildStaff.buildStaffModule);
  $('body').on('click', '.fixridebtn', updateRide.fixRide);
};

export default {
  createListeners,
};
