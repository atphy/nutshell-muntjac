import authData from './data/authData';
import staffList from '../components/staff/staffList';
import buildVendors from '../components/vendor/vendorList';
import vendorData from './data/vendor/vendorData';
import removeVisitor from '../components/visitor/deleteVisitor';
import deleteRide from '../components/ride/deleteRide/deleteRide';
import newVendor from '../components/vendor/newVendorForm';
import editVendor from '../components/vendor/editVendorForm';
import utils from './utils';
import updateRide from '../components/ride/updateRide/updateRide';
import homescreen from '../components/homescreen/homescreen';
import newStaff from '../components/staff/newStaff';
import addVisitor from '../components/visitor/addVisitor/addVisitor';
import updateVisitor from '../components/visitor/updateVisitor/updateVisitor';
import createRide from '../components/ride/createRide/createRide';
import random from '../components/randomBuy/randomBuy';

const editVendorEvent = (e) => {
  if (!authData.isAuthenticated()) {
    $('#myModal').modal('show');
    return;
  }

  const vendorId = e.target.closest('.card').id;
  vendorData.getVendorById(vendorId)
    .then((response) => {
      const vendorObj = response.data;

      // Create the edit form in the DOM
      editVendor.showEditVendorForm(vendorId, vendorObj);

      // Check if user is logged in and if so, remove 'hide' class
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

const submitUpdateVendorForm = (e) => {
  e.preventDefault();
  const fbVendorId = e.target.getAttribute('data-firebase-vendor-id');

  const editAddress = $('#editAddress').val();
  const editName = $('#editName').val();
  const editPhone = $('#editPhone').val();
  const editProduct = $('#editProduct').val();
  const editPrice = $('#editPrice');
  const editAssignedStaff = $('#editAssignedStaff');
  const vendorId = e.target.getAttribute('data-vendorId');

  const newVendorObj = {
    address: editAddress,
    name: editName,
    phoneNumber: editPhone,
    product: editProduct,
    vendorId,
    price: editPrice,
    assignedStaff: editAssignedStaff,
  };

  vendorData.updateVendor(fbVendorId, newVendorObj)
    .then(() => {
      utils.printToDom('#vendor-form', '');
      buildVendors.buildVendorList();
    })
    .catch((err) => console.error('Could not update vendor', err));
};

const submitNewVendorForm = (e) => {
  e.preventDefault();

  // get values from form
  const inputAddress = $('#inputAddress').val();
  const inputName = $('#inputName').val();
  const inputPhone = $('#inputPhone').val();
  const inputProduct = $('#inputProduct').val();
  const inputPrice = $('#inputPrice').val();
  const inputAssignedStaff = $('#inputAssignedStaff');
  const vendorId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  const newVendorObj = {
    address: inputAddress,
    name: inputName,
    phoneNumber: inputPhone,
    product: inputProduct,
    vendorId,
    price: inputPrice,
    assignedStaff: inputAssignedStaff,
  };

  vendorData.addVendor(newVendorObj)
    .then(() => {
      utils.printToDom('#vendor-form', '');
      buildVendors.buildVendorList();
    })
    .catch((err) => console.error('Add Vendor failed', err));
};

const createListeners = () => {
  $('body').on('click', '.delete-vendor', deleteVendorEvent);
  $('body').on('click', '.edit-vendor', editVendorEvent);
  $('body').on('click', '#remove-visitor', removeVisitor.deleteVisitor);
  $('body').on('click', '.deleteRideIcon', deleteRide.deleteRide);
  $('body').on('click', '.add-vendor', newVendor.newVendorForm);
  $('body').on('click', '#submit-new-vendor', submitNewVendorForm);
  $('body').on('click', '#submit-update-vendor', submitUpdateVendorForm);
  $('body').on('click', '.delete-staff', staffList.deleteStaff);
  $('body').on('click', '.navwhale', homescreen.buildHomeScreen);
  $('body').on('click', '.show-staff-form', newStaff.buildStaffForm);
  $('body').on('click', '.submit-staff-form', staffList.addStaff);
  $('body').on('click', '.add-vis-form', addVisitor.showVisForm);
  $('body').on('click', '#addVisitor', addVisitor.addVisitorEvent);
  $('body').on('click', '.update-visitor', updateVisitor.updateVisEvent);
  $('body').on('click', '#visitorUpdate', updateVisitor.updateVisitor);
  $('body').on('click', '.rideEditBtn', updateRide.updateRideForm);
  $('body').on('click', '.updateSubmit', updateRide.updateRide);
  $('body').on('click', '.edit-staff', staffList.showEditStaffForm);
  $('body').on('click', '#update-staff', staffList.editStaff);
  $('body').on('click', '.closeForm', updateRide.clearForm);
  $('body').on('click', '.createRideBtn', createRide.showRideForm);
  $('body').on('change', '#coaster-image', createRide.imageInputWatcher);
  random.buyEvent();
};

export default {
  createListeners,
};
