import utils from '../../helpers/utils';

const showEditVendorForm = (fbVendorId, {
  address,
  name,
  phoneNumber,
  product,
  vendorId,
}) => {
  const domString = `
  <div class="container">
  <form class="hide" id="edit-vendor-form">
    <div class="form-group">
      <label for="inputAddress">Address</label>
      <input type="text" class="form-control" id="inputAddress" value="${address}">
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" value="${name}">
      </div>
      <div class="form-group col-md-4">
        <label for="inputPhone">Phone Number</label>
        <input type="text" class="form-control" id="inputPhone" value="${phoneNumber}">
      </div>
      <div class="form-group col-md-2">
        <label for="inputProduct">Product</label>
        <input type="text" class="form-control" id="inputProduct" value="${product}">
      </div>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-update-vendor" data-firebase-vendor-id="${fbVendorId}" data-vendorId="${vendorId}">Update Vendor</button>
  </form> 
  </div>
  `;

  utils.printToDom('#vendor-form', domString);
};

export default {
  showEditVendorForm,
};
