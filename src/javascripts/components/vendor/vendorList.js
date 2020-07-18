import vendorData from '../../helpers/data/vendor/vendorData';
import vendorCardMaker from './vendor';
import utils from '../../helpers/utils';

const buildVendorList = () => {
  vendorData.getVendors()
    .then((vendors) => {
      let domString = `
      <div class="modal" tabindex="-1" role="dialog" id="myModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Authentication Required</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>You must be logged in to perform that action.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
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
