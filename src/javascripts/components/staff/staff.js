const staffCardMaker = (staff) => {
  const domString = `
    <div class="col-3">
      <div class="card border-0 rounded-0 bg-light text-dark mb-3" id=${staff.id}>
        <div class="card-header text-center">${staff.firstName} ${staff.lastName}</div>
        <div class="card-body">
          <h5 class="card-title">${staff.position}</h5>
          <p class="card-text">${staff.employeeId}</p>
        </div>
      </div>
    </div>
    `;

  return domString;
};

export default { staffCardMaker };
