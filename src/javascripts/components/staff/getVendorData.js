import vendorData from '../../helpers/data/vendor/vendorData';
import utils from '../../helpers/utils';

const vendorNameById = (staffCard, vendorAssignment) => {
  if (vendorAssignment) {
    vendorData.getVendorById(vendorAssignment)
      .then((response) => {
        const vendor = response.data;
        const domString = vendor.name;
        utils.printToDom(staffCard, domString);
      })
      .catch((err) => console.error(err));
  }
};

export default { vendorNameById };
