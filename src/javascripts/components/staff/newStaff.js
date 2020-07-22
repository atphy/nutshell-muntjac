import utils from '../../helpers/utils';

const buildStaffForm = () => {
  const domString = `
  <form id="new-hire-form">
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
      <input type="text" class="form-control" id="position">
    </div>
    <div class="form-group">
    <label for="employee-id">Employee ID</label>
    <input type="text" class="form-control" id="employee-id">
  </div>
    <button type="submit" class="btn btn-primary submit-staff-form" id="new-employee">Submit</button>
  </form>
  `;
  if (!$('#new-hire-form').length) {
    utils.printToDom('#staff-form', domString);
  } else {
    $('#staff-form').toggleClass('hide');
  }
};

export default { buildStaffForm };
