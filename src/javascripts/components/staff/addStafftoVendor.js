import vendorData from '../../helpers/data/vendor/vendorData';
import utils from '../../helpers/utils';
import staffData from '../../helpers/data/staff/staffData';

const addStaffToVendor = (vendorId) => {
  vendorData.getVendorById(vendorId)
    .then((response) => {
      const vendorToAddStaff = Array.from(response.data.staffAssigned);
      vendorToAddStaff.push(staffData.getNewStaffId());
      vendorData.updateVendorStaff(vendorId, vendorToAddStaff);
      // vendorData.updateVendorAvailable(vendorId, vendorToAddStaff.length > 2);
    });
};

const vendorList = () => {
  let domString = '<option value="">No assignment</option>';
  vendorData.getVendors()
    .then((vendors) => {
      vendors.forEach((vendor) => {
        domString += `<option value="${vendor.id}">${vendor.name}</option>`;
      });
      utils.printToDom('#staff-vendors', domString);
    })
    .catch((err) => console.error('nope', err));
};

export default { vendorList, addStaffToVendor };
