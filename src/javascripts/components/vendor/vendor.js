import authData from '../../helpers/data/authData';

const vendorCardMaker = (vendor) => {
  let domString = `
  <div class="col-3">
    <div class="card border-0 rounded-0 bg-light text-dark mb-3" id=${vendor.id}>
      <div class="card-header text-center d-flex justify-content-between">
        <span class="m-auto">${vendor.name}</span>`;
  if (authData.isAuthenticated()) {
    domString += '<button class="btn btn-danger delete-vendor"><i class="fas fa-trash-alt"></i></button>';
  } else {
    domString += '<button class="btn btn-danger delete-vendor hide"><i class="fas fa-trash-alt"></i></button>';
  }
  domString += `
      </div>
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
