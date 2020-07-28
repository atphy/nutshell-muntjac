import staffData from '../../helpers/data/staff/staffData';
import staffMaker from './staff';
import utils from '../../helpers/utils';
import editForm from './editStaffForm';
import authData from '../../helpers/data/authData';

const buildStaffModule = () => {
  staffData.getStaff()
    .then((staffMember) => {
      let domString = `
        <h2 class="text-center homeH3 mt-2">Staff Members</h2>
        <div class="text-center mb-3" id="add-button"></div>
        <div id="staff-form"></div>
        <div class="d-flex flex-wrap">
      `;
      staffMember.forEach((staff) => {
        domString += staffMaker.staffCardMaker(staff);
      });

      domString += '</div>';

      utils.printToDom('#content', domString);
      authData.checkLoginStatus();
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

  const newStaffObj = {
    employeeId: $('#employee-id').val(),
    firstName: $('#first-name').val(),
    lastName: $('#last-name').val(),
    position: $('#position').val(),
    staffLevel: $('#staffLevel').val(),
    jobAssignment: $('#jobAssignment').val(),
  };

  staffData.addStaff(newStaffObj)
    .then(() => {
      utils.printToDom('#staff-form', '');
      buildStaffModule();
    })
    .catch((err) => console.error('Add Staff failed', err));
};

const showEditStaffForm = (e) => {
  const employeeId = e.target.closest('.card').id;
  editForm.buildEditForm(employeeId);
};

const editStaff = (e) => {
  e.preventDefault();
  const employeeId = e.target.closest('.staff-updater').id;

  const updateStaffObj = {
    firstName: $('#edit-first-name').val(),
    lastName: $('#edit-last-name').val(),
    position: $('#edit-position').val(),
    staffLevel: $('#edit-staffLevel').val(),
    jobAssignment: $('#edit-jobAssignment').val(),
  };

  staffData.updateStaff(employeeId, updateStaffObj)
    .then(() => buildStaffModule())
    .catch((err) => console.error('could not update staff', err));
};

export default {
  buildStaffModule,
  deleteStaff,
  addStaff,
  showEditStaffForm,
  editStaff,
};
