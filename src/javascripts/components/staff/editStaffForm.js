import staffData from '../../helpers/data/staff/staffData';
import utils from '../../helpers/utils';

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
          <input type="text" class="form-control" id="edit-position" value="${staff.position}">
        </div>
        <div class="form-group">
          <label for="edit-staffLevel">Staff Level</label>
          <input type="text" class="form-control" id="edit-staffLevel" value="${staff.staffLevel}">
        </div>
        <div class="form-group">
          <label for="edit-jobAssignment">Job Assignment</label>
          <input type="text" class="form-control" id="edit-jobAssignment" value="${staff.jobAssignment}">
        </div>

          <button type="submit" class="btn btn-primary" id="update-staff">Submit</button>
      </form>
      `;

      utils.printToDom('#staff-form', domString);
    })
    .catch((err) => console.error(err));
};

export default { buildEditForm };
