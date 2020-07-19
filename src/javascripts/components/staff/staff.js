import authData from '../../helpers/data/authData';

const staffCardMaker = (staff) => {
  let domString = `
    <div class="col-3">
      <div class="staff-card card border-0 rounded-1 bg-light text-dark mb-3" id=${staff.id}>
        <div class="card-header text-center">${staff.firstName} ${staff.lastName}</div>
        <div class="card-body text-center">
          <h5 class="card-title">${staff.position}</h5>`;
  if (authData.isAuthenticated()) {
    domString += `
    <button class="btn btn-warning edit-staff">Edit</button>
    <button class="btn btn-danger delete-staff">Delete</button>
    `;
  } else {
    domString += `
    <button class="btn btn-warning edit-staff hide">Edit</button>
    <button class="btn btn-danger delete-staff hide">Delete</button>
    `;
  }
  domString += `
        </div>
      </div>
    </div>
    `;

  return domString;
};

export default { staffCardMaker };
