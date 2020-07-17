const staffCardMaker = (staff) => {
  const domString = `
    <div class="col-3">
      <div class="staff-card card border-0 rounded-1 bg-light text-dark mb-3" id=${staff.id}>
        <div class="card-header text-center">${staff.firstName} ${staff.lastName}</div>
        <div class="card-body text-center">
          <h5 class="card-title">${staff.position}</h5>
          <p class="card-text"> Employee ID: ${staff.employeeId}</p>
        </div>
      </div>
    </div>
    `;

  return domString;
};

export default { staffCardMaker };
