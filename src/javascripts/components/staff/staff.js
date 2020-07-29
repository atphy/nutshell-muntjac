import authData from '../../helpers/data/authData';
import getRideData from './getRideData';

let i = 0;

const staffCardMaker = (staff) => {
  let domString = `
    <div class="col-3">
      <div class="staff-card card border-0 rounded-1 bg-light text-dark mb-3" id=${staff.id}>
        <div class="card-header text-center">${staff.firstName} ${staff.lastName}</div>
        <div class="card-body text-center">
        <h5 class="card-title">${staff.staffLevel}</h5>`;
  domString += `
  <h5 class="card-title" id="ride-assign${i}"></h5>
          <div class="mod-buttons">
          </div>
          </div>
          </div>
        </div>
        `;
  i += 1;
  getRideData.rideNameById(staff.jobAssignment);
  authData.checkLoginStatus();
  return domString;
};

export default { staffCardMaker };
