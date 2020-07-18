import utils from '../../helpers/utils';

const buildStaffForm = () => {
  const domString = `
  <form>
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input type="text" class="form-control" id="first-name" placeholder="...">
    </div>
    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input type="text" class="form-control" id="last-name" placeholder="...">
    </div>
    <div class="form-group">
      <label for="position">Position</label>
      <input type="text" class="form-control" id="position" placeholder="...">
    </div>
    <div class="form-group">
      <label for="employee-id">Employee ID</label>
      <input type="text" class="form-control" id="employee-id" placeholder="...">
    </div>
    <button type="submit" class="btn btn-primary" id="new-employee">Submit</button>
  </form>
  `;

  utils.printToDom(,domString);
};

export default { buildStaffForm };
