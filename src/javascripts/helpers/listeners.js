import buildStaff from '../components/staff/staffList';
import buildVendors from '../components/vendor/vendorList';
import displayRides from '../components/displayRides/displayRides';
import vendorData from './data/vendor/vendorData';

const deleteVendorEvent = (e) => {
  const vendorId = e.target.closest('.card').id;
  vendorData.deleteVendor(vendorId)
    .then(() => {
      buildVendors.buildVendorList();
    })
    .catch((err) => console.error('Could not delete vendor', err));
};

const createListeners = () => {
  $('body').on('click', '#navbar-vendors', buildVendors.buildVendorList);
  $('body').on('click', '.rideLink', displayRides.buildRideModule);
  $('body').on('click', '.delete-vendor', deleteVendorEvent);
  $('body').on('click', '#navbar-staff', buildStaff.buildStaffModule);
};

export default {
  createListeners,
};
