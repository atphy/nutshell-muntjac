import staffData from '../../helpers/data/staff/staffData';
import staffMaker from './staff';
import utils from '../../helpers/utils';

const buildStaffModule = () => {
  staffData.getStaff()
    .then((staffMember) => {
      let domString = `
        <h2 class="text-center">Staff Members</h2>
        <div class="d-flex flex-wrap">
      `;

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

export default { buildStaffModule, deleteStaff };
