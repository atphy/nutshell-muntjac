import authData from '../../helpers/data/authData';
import vendorData from '../../helpers/data/vendor/vendorData';
import vendorCardMaker from './vendor';
import utils from '../../helpers/utils';

const buildVendorList = () => {
  vendorData.getVendors()
    .then((vendors) => {
      let domString = `
      <h2 class="text-center homeH3 mt-3">Whalom Park Vendors</h2>
      <div class="text-center mb-3" id="add-button"></div>
      <div id="vendor-form"></div>
      <div class="d-flex flex-wrap mt-2">`;

      vendors.forEach((vendor) => {
        domString += vendorCardMaker.vendorCardMaker(vendor);
      });

      domString += '</div>';

      utils.printToDom('#content', domString);
      authData.checkLoginStatus();
    })
    .catch((err) => console.error('buildVendorList failed', err));
};

export default {
  buildVendorList,
};
