import utils from '../../helpers/utils';

const showEditVendorForm = (fbVendorId, {
  address,
  name,
  phoneNumber,
  product,
  vendorId,
  price,
  assignedStaff,
}) => {
  const domString = `
  <div class="container">
  <h2>Update Vendor</h2>
  <form class="hide" id="edit-vendor-form">
    <div class="form-group">
      <label for="editAddress">Address</label>
      <input type="text" class="form-control" id="editAddress" value="${address}">
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="editName">Name</label>
        <input type="text" class="form-control" id="editName" value="${name}">
      </div>
      <div class="form-group col-md-4">
        <label for="editPhone">Phone Number</label>
        <input type="text" class="form-control" id="editPhone" value="${phoneNumber}">
      </div>
      <div class="form-group col-md-2">
        <label for="editProduct">Product</label>
        <input type="text" class="form-control" id="editProduct" value="${product}">
      </div>
      <div class="form-group col-md-2">
      <label for="editPrice">Price</label>
      <input type="integer" class="form-control" id="editPrice" value="${price}">
      </div>
      <div class="form-group col-md-2">
      <label for="editAssignedStaff">Assigned Staff</label>
      <input type="integer" class="form-control" id="editAssignedStaff" value="${assignedStaff}">
      </div>

    </div>
    <button type="submit" class="btn btn-primary" id="submit-update-vendor" data-firebase-vendor-id="${fbVendorId}" data-vendorId="${vendorId}">Update Vendor</button>
  </form> 
  </div>
  `;
  if (!$('#edit-vendor-form').length) {
    utils.printToDom('#vendor-form', domString);
  } else {
    $('#vendor-form').toggleClass('hide');
  }
};

export default {
  showEditVendorForm,
};
