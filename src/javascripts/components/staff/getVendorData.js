import vendorData from '../../helpers/data/vendor/vendorData';
import utils from '../../helpers/utils';

const vendorNameById = (StaffCard, jobAssignment) => {
  vendorData.getVendorById(jobAssignment)
    .then((response) => {
      const vendor = response.data;
      const domString = vendor.name;
      console.warn(domString);
      utils.printToDom(StaffCard, domString);
    })
    .catch((err) => console.error(err));
};

export default { vendorNameById };
