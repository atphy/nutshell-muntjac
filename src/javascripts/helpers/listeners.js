import authData from './data/authData';
import staffList from '../components/staff/staffList';
import buildVendors from '../components/vendor/vendorList';
import displayRides from '../components/ride/displayRides/displayRides';
import vendorData from './data/vendor/vendorData';
import displayVisitors from '../components/visitor/visitor';
import removeVisitor from '../components/deleteVisitor/deleteVisitor';
import deleteRide from '../components/ride/deleteRide/deleteRide';
import newVendor from '../components/vendor/newVendorForm';
import editVendor from '../components/vendor/editVendorForm';
import utils from './utils';
import updateRide from '../components/ride/updateRide/updateRide';

const editVendorEvent = (e) => {
  if (!authData.isAuthenticated()) {
    $('#myModal').modal('show');
    return;
  }

  const vendorId = e.target.closest('.card').id;
  vendorData.getVendorById(vendorId)
    .then((response) => {
      const vendorObj = response.data;
      console.error('Retrieved Vendor: ', vendorObj);
      editVendor.showEditVendorForm(vendorObj);
      authData.checkLoginStatus();
    })
    .catch((err) => console.error('Could not retrieve Vendor', err));
};

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

const submitUpdateVendorForm = (e) => {
  e.preventDefault();
  console.error('Submit Update Vendor Form Completed for VendorId: ', e.target.getAttribute('data-vendor-id'));
};

const submitNewVendorForm = (e) => {
  e.preventDefault();

  // get values from form
  const inputAddress = $('#inputAddress').val();
  const inputName = $('#inputName').val();
  const inputPhone = $('#inputPhone').val();
  const inputProduct = $('#inputProduct').val();
  const vendorId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  const newVendorObj = {
    address: inputAddress,
    name: inputName,
    phoneNumber: inputPhone,
    product: inputProduct,
    vendorId,
  };

  vendorData.addVendor(newVendorObj)
    .then(() => {
      utils.printToDom('#vendor-form', '');
      buildVendors.buildVendorList();
    })
    .catch((err) => console.error('Add Vendor failed', err));
};

const createListeners = () => {
  $('body').on('click', '#navbar-vendors', buildVendors.buildVendorList);
  $('body').on('click', '.rideLink', displayRides.buildRideModule);
  $('body').on('click', '.delete-vendor', deleteVendorEvent);
  $('body').on('click', '.edit-vendor', editVendorEvent);
  $('body').on('click', '.visitorLink', displayVisitors.printVisitor);
  $('body').on('click', '#remove-visitor', removeVisitor.deleteVisitor);
  $('body').on('click', '.deleteRideIcon', deleteRide.deleteRide);
  $('body').on('click', '#navbar-staff', staffList.buildStaffModule);
  $('body').on('click', '#add-vendor', showNewVendorForm);
  $('body').on('click', '#submit-new-vendor', submitNewVendorForm);
  $('body').on('click', '#submit-update-vendor', submitUpdateVendorForm);
  $('body').on('click', '#navbar-staff', staffList.buildStaffModule);
  $('body').on('click', '.delete-staff', staffList.deleteStaff);
  $('body').on('click', '#navbar-staff', staffList.buildStaffModule);
  $('body').on('click', '.fixridebtn', updateRide.fixRide);
};

export default {
  createListeners,
};
