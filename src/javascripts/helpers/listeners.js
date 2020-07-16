import buildVendors from '../components/vendor/vendorList';

const createListeners = () => {
  $('body').on('click', '#navbar-vendors', buildVendors.buildVendorList);
};

export default {
  createListeners,
};
