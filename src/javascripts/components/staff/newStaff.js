import utils from '../../helpers/utils';
import addRideOrVendor from './addRideOrVendor';

const buildStaffForm = () => {
  const domString = `
  <form class="check-auth" id="new-hire-form">
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input type="text" class="form-control" id="first-name" required />
    </div>
    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input type="text" class="form-control" id="last-name" required />
    </div>
    <div class="form-group">
      <label for="position">Position</label>
      <select class="form-control" id="staff-level">
        <option value="Intern">Intern</option>
        <option value="Senior">Senior</option>
      </select>
    </div>
    <div class="form-group">
    <input type="radio" name="ride-vendor" value="ride"> Assign to a ride<br>
    <input type="radio" name="ride-vendor" value="vendor"> Assign to a vendor<br>
    </div>
    <div class="form-group" id="rides-group"></div>
    <div class="form-group" id="vendors-group"></div>
    <button type="submit" class="btn btn-primary submit-staff-form" id="new-employee">Submit</button>
  </form>
  `;
  if (!$('#new-hire-form').length) {
    utils.printToDom('#staff-form', domString);
  } else {
    $('#staff-form').toggleClass('hide');
  }
  addRideOrVendor.rideOrVendorClick();
};

export default { buildStaffForm };
