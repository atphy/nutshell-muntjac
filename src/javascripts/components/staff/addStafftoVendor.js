import vendorData from '../../helpers/data/vendor/vendorData';
import utils from '../../helpers/utils';

const vendorList = () => {
  let domString = `
  <label for="staff-vendors">Assign to a vendor:</label>
  <select name="staff-vendors" id="staff-vendors">
  <option value="">No assignment</option>
 `;
  vendorData.getVendors()
    .then((vendors) => {
      vendors.forEach((vendor) => {
        domString += `<option value="${vendor.id}">${vendor.name}</option>`;
      });
      domString += '</select>';
      utils.printToDom('#vendors-group', domString);
    })
    .catch((err) => console.error('nope', err));
};

export default { vendorList };
