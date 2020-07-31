import staffData from '../../helpers/data/staff/staffData';
import staffMaker from './staff';
import utils from '../../helpers/utils';
import editForm from './editStaffForm';
import authData from '../../helpers/data/authData';
import addStaffToRide from './addStaffToRide';

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
    firstName: $('#first-name').val(),
    lastName: $('#last-name').val(),
    staffLevel: $('#staff-level').val(),
    jobAssignment: $('#staff-rides').val(),
  };
  staffData.addStaff(newStaffObj)
    .then(() => {
      addStaffToRide.addStaffToRide($('#staff-rides').val());
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
    staffLevel: $('#edit-level').val(),
    jobAssignment: $('#staff-rides').val(),
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
