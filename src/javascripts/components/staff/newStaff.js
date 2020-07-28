import utils from '../../helpers/utils';
import addStaffToRide from './addStaffToRide';

const buildStaffForm = () => {
  const domString = `
  <form class="check-auth" id="new-hire-form">
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input type="text" class="form-control" id="first-name">
    </div>
    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input type="text" class="form-control" id="last-name">
    </div>
    <div class="form-group">
      <label for="position">Position</label>
      <select class="form-control" id="staff-level">
        <option value="Intern">Intern</option>
        <option value="Senior">Senior</option>
      </select>
    </div>
  <div class="form-group">
  <label for="staff-rides">Assign to a ride:</label>
  <select name="staff-rides" id="staff-rides"></select>
  </div>
    <button type="submit" class="btn btn-primary submit-staff-form" id="new-employee">Submit</button>
  </form>
  `;
  utils.printToDom('#staff-form', domString);
  addStaffToRide.rideList();
};

export default { buildStaffForm };
