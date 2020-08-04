import staffData from '../../helpers/data/staff/staffData';
import utils from '../../helpers/utils';
import addRideOrVendor from './addRideOrVendor';

const buildEditForm = (employeeId) => {
  staffData.getStaffById(employeeId)
    .then((response) => {
      const staff = response.data;
      const domString = `
      <form class="staff-updater" id="${employeeId}">
        <div class="form-group">
          <label for="edit-first-name">First Name</label>
          <input type="text" class="form-control" id="edit-first-name" value="${staff.firstName}">
        </div>
        <div class="form-group">
          <label for="edit-last-name">Last Name</label>
          <input type="text" class="form-control" id="edit-last-name" value="${staff.lastName}">
        </div>
        <div class="form-group">
          <label for="edit-position">Position</label>
          <select class="form-control" id="edit-level" value="${staff.staffLevel}">
            <option value="${staff.staffLevel}" selected="selected">${staff.staffLevel} (selected)</option>
            <option value="Intern">Intern</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <input type="radio" name="ride-vendor" value="ride"> Assign to a ride<br>
        <input type="radio" name="ride-vendor" value="vendor"> Assign to a vendor<br>
        </div>
        <div class="form-group" id="rides-group"></div>
        <div class="form-group" id="vendors-group"></div>
          <button type="submit" class="btn btn-primary" id="update-staff">Submit</button>
      </form>
      `;
      if (!$('.staff-updater').length) {
        utils.printToDom('#staff-form', domString);
      } else {
        $('#staff-form').toggleClass('hide');
      }
      addRideOrVendor.rideOrVendorClick();
    })
    .catch((err) => console.error(err));
};

export default { buildEditForm };
