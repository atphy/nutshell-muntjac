import vendorData from '../../helpers/data/vendor/vendorData';
import utils from '../../helpers/utils';

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

export default { vendorList };
