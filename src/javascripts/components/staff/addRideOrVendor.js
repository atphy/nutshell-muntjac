import addStaffToRide from './addStaffToRide';
import addStaffToVendor from './addStafftoVendor';

const rideOrVendorRadio = () => $("input[name='ride-vendor']:checked").val();

const rideOrVendor = () => {
  if (rideOrVendorRadio() === 'ride') {
    addStaffToRide.rideList();
    $('#staff-vendors').value = '';
    $('#vendors-group').addClass('hide');
    $('#rides-group').removeClass('hide');
  } else if (rideOrVendorRadio() === 'vendor') {
    addStaffToVendor.vendorList();
    $('#staff-rides').value = '';
    $('#rides-group').addClass('hide');
    $('#vendors-group').removeClass('hide');
  }
};

const rideOrVendorClick = () => {
  $("input[name='ride-vendor']").click(rideOrVendor);
};

export default { rideOrVendorClick };
