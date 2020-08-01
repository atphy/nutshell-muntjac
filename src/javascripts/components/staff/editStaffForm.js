import staffData from '../../helpers/data/staff/staffData';
import utils from '../../helpers/utils';
import addStaffToRide from './addStaffToRide';
import addStaffToVendor from './addStafftoVendor';

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
        <div class="form-group">
          <label for="staff-rides">Assign to a ride:</label>
          <option value="${staff.jobAssignment}" selected>${staff.jobAssignment} (selected)</option>
          <select name="staff-rides" id="staff-rides" value="${staff.jobAssignment}">
          <option value="${staff.jobAssignment}">${staff.jobAssignment} (selected)</option>
          </select>
        </div>
        <div class="form-group">
          <label for="staff-vendors">Assign to a vendor:</label>
          <option value="${staff.jobAssignment}" selected>${staff.jobAssignment} (selected)</option>
          <select name="staff-vendors" id="staff-vendors" value="${staff.jobAssignment}">
          <option value="${staff.jobAssignment}" selected>${staff.jobAssignment} (selected)</option>
          </select>
        </div>
          <button type="submit" class="btn btn-primary" id="update-staff">Submit</button>
      </form>
      `;
      if (!$('.staff-updater').length) {
        utils.printToDom('#staff-form', domString);
      } else {
        $('#staff-form').toggleClass('hide');
      }
      addStaffToRide.rideList();
      addStaffToVendor.vendorList();
    })
    .catch((err) => console.error(err));
};

export default { buildEditForm };
