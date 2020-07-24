import staffList from '../staff/staffList';
import displayRides from '../ride/displayRides/displayRides';
import displayVisitors from '../visitor/displayVisitor/visitor';
import buildVendors from '../vendor/vendorList';

const navListeners = () => {
  $('body').on('click', '#navbar-staff', staffList.buildStaffModule);
  $('body').on('click', '#navbar-rides', displayRides.buildRideModule);
  $('body').on('click', '#navbar-visitors', displayVisitors.printVisitor);
  $('body').on('click', '#navbar-vendors', buildVendors.buildVendorList);
};

export default { navListeners };
