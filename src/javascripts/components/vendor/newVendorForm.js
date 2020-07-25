import utils from '../../helpers/utils';

const newVendorForm = () => {
  const domString = `
  <div class="container check-auth">
  <form id="new-vendor-form">
  <h2>New Vendor</h2>
    <div class="form-group">
      <label for="inputAddress">Address</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName">
      </div>
      <div class="form-group col-md-4">
        <label for="inputPhone">Phone Number</label>
        <input type="text" class="form-control" id="inputPhone">
      </div>
      <div class="form-group col-md-2">
        <label for="inputProduct">Product</label>
        <input type="text" class="form-control" id="inputProduct">
      </div>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-new-vendor">Submit New Vendor</button>
  </form> 
  </div>
  `;

  utils.printToDom('#vendor-form', domString);
};

export default {
  newVendorForm,
};
