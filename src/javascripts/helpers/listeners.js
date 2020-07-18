import authData from './data/authData';
import buildStaff from '../components/staff/staffList';
import buildVendors from '../components/vendor/vendorList';
import displayRides from '../components/ride/displayRides/displayRides';
import vendorData from './data/vendor/vendorData';
import displayVisitors from '../components/visitor/visitor';
import removeVisitor from '../components/deleteVisitor/deleteVisitor';
import deleteRide from '../components/ride/deleteRide/deleteRide';
import newVendor from '../components/vendor/newVendorForm';
import utils from './utils';

const deleteVendorEvent = (e) => {
  if (!authData.isAuthenticated()) {
    $('#myModal').modal('show');
    return;
  }
  const vendorId = e.target.closest('.card').id;
  vendorData.deleteVendor(vendorId)
    .then(() => {
      buildVendors.buildVendorList();
    })
    .catch((err) => console.error('Could not delete vendor', err));
};

const showNewVendorForm = () => {
  if (!authData.isAuthenticated()) {
    $('#myModal').modal('show');
    return;
  }
  newVendor.newVendorForm();
  authData.checkLoginStatus();
};

const submitNewVendorForm = (e) => {
  e.preventDefault();
  utils.printToDom('#add-vendor-form', '');
};

const createListeners = () => {
  $('body').on('click', '#navbar-vendors', buildVendors.buildVendorList);
  $('body').on('click', '.rideLink', displayRides.buildRideModule);
  $('body').on('click', '.delete-vendor', deleteVendorEvent);
  $('body').on('click', '.visitorLink', displayVisitors.printVisitor);
  $('body').on('click', '#remove-visitor', removeVisitor.deleteVisitor);
  $('body').on('click', '.deleteRideIcon', deleteRide.deleteRide);
  $('body').on('click', '#navbar-staff', buildStaff.buildStaffModule);
  $('body').on('click', '#add-vendor', showNewVendorForm);
  $('body').on('click', '#submit-new-vendor', submitNewVendorForm);
};

export default {
  createListeners,
};
