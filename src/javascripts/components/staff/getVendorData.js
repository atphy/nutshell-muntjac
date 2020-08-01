import vendorData from '../../helpers/data/vendor/vendorData';
import utils from '../../helpers/utils';

let i = 0;

const vendorNameById = (jobAssignment) => {
  vendorData.getVendorById(jobAssignment)
    .then((response) => {
      const vendor = response.data;
      const domString = vendor.name;
      console.warn(domString);
      utils.printToDom(`#vendor-assign${i}`, domString);
      i += 1;
    })
    .catch((err) => console.error(err));
};

export default { vendorNameById };
