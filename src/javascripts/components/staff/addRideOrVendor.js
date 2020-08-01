import addStaffToRide from './addStaffToRide';
import addStaffToVendor from './addStafftoVendor';

const rideOrVendorRadio = () => $("input[name='ride-vendor']:checked").val();

const rideOrVendor = () => {
  if (rideOrVendorRadio() === 'ride') {
    addStaffToRide.rideList();
  } else if (rideOrVendorRadio() === 'vendor') {
    addStaffToVendor.vendorList();
  }
};

const rideOrVendorClick = () => {
  $("input[name='ride-vendor']").click(rideOrVendor);
};

export default { rideOrVendorClick };

// Currently not being used. Will implement once staff assign to ride and vendor are both done.
