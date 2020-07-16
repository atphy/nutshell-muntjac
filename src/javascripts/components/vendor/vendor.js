const vendorCardMaker = (vendor) => {
  const domString = `
  <div class="col-3">
    <div class="card border-0 rounded-0 bg-light text-dark mb-3" id=${vendor.id}>
      <div class="card-header text-center">${vendor.name}</div>
      <div class="card-body">
        <h5 class="card-title">${vendor.product}</h5>
        <p class="card-text">${vendor.address}</p>
        <p class="card-text"><small>${vendor.phoneNumber}</small></p>
      </div>
    </div>
  </div>
  `;

  return domString;
};

export default {
  vendorCardMaker,
};
