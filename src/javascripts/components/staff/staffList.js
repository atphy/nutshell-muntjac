import authData from '../../helpers/data/authData';
import staffData from '../../helpers/data/staff/staffData';
import staffMaker from './staff';
import utils from '../../helpers/utils';

const buildStaffModule = () => {
  staffData.getStaff()
    .then((staffMember) => {
      let domString = `
        <h2 class="text-center">Staff Members</h2>
      `;

      if (authData.isAuthenticated()) {
        domString += `
        <button type="submit" class="btn btn-primary show-staff-form">New Hire Form</button>
        <div id="add-staff-form"></div>
        `;
      } else {
        domString += `
        <button type="submit" class="btn btn-primary show-staff-form hide">New Hire Form</button>
        <div id="add-staff-form"></div>
        `;
      }

      domString += '<div class="d-flex flex-wrap">';

      staffMember.forEach((staff) => {
        domString += staffMaker.staffCardMaker(staff);
      });

      domString += '</div>';

      utils.printToDom('#content', domString);
    })
    .catch((err) => console.error('buildStaffModule failed', err));
};

const deleteStaff = (e) => {
  const employeeId = e.target.closest('.card').id;
  staffData.deleteStaff(employeeId)
    .then(() => {
      buildStaffModule();
    })
    .catch((err) => console.error(err));
};

const addStaff = (e) => {
  e.preventDefault();

  const inputId = $('#employee-id').val();
  const inputFirstName = $('#first-name').val();
  const inputLastName = $('#last-name').val();
  const inputPosition = $('#position').val();

  const newStaffObj = {
    employeeId: inputId,
    firstName: inputFirstName,
    lastName: inputLastName,
    position: inputPosition,
  };

  staffData.addStaff(newStaffObj)
    .then(() => {
      utils.printToDom('#add-staff-form', '');
      buildStaffModule();
    })
    .catch((err) => console.error('Add Staff failed', err));
};

export default { buildStaffModule, deleteStaff, addStaff };
