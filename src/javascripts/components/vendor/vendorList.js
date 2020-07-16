import vendorData from '../../helpers/data/vendor/vendorData';
import vendorCardMaker from './vendor';
import utils from '../../helpers/utils';

const buildVendorList = () => {
  vendorData.getVendors()
    .then((vendors) => {
      let domString = `
      <h2 class="text-center">Whalom Park Vendors</h2>
      <div class="d-flex flex-wrap">
      `;

      vendors.forEach((vendor) => {
        domString += vendorCardMaker.vendorCardMaker(vendor);
      });

      domString += '</div>';

      utils.printToDom('#content', domString);
    })
    .catch((err) => console.error('buildVendorList failed', err));
};

export default {
  buildVendorList,
};
