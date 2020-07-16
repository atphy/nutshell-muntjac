const buildStaffModule = (staff) => {
  const domString = `
    <div class="card text-center staff-card" id="${staff.employeeId}">
      <div class="card-body" id="${staff.employeeId}">
        <h3 class="card-title">${staff.firstName} ${staff.lastName}</h3>
        <h5 class="card-body">${staff.position}</h5>
        <button class="btn btn-secondary" id="view-board">View Board</button>
        <button class="btn btn-secondary" id="delete-board">Delete</button>
      </div>
    </div>`;

  return domString;
};

export default { buildStaffModule };
