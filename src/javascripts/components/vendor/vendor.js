import authData from '../../helpers/data/authData';

const vendorCardMaker = (vendor) => {
  let domString = `
  <div class="col-3">
    <div class="card border-0 rounded-0 bg-light text-dark mb-3" id=${vendor.id}>
      <div class="card-header text-center">${vendor.name}</div>
      <div class="card-body text-center">
        <h5 class="card-title">${vendor.product}</h5>
        <p class="card-text">${vendor.address}</p>
        <p class="card-text"><small>${vendor.phoneNumber}</small></p>`;
  if (authData.isAuthenticated()) {
    domString += '<button class="btn btn-warning edit-vendor mx-1">Edit</button>';
  } else {
    domString += '<button class="btn btn-warning edit-vendor hide mx-1">Edit</button>';
  }
  if (authData.isAuthenticated()) {
    domString += '<button class="btn btn-danger delete-vendor mx-1">Delete</button>';
  } else {
    domString += '<button class="btn btn-danger delete-vendor hide mx-1">Delete</button>';
  }

  domString += `
      </div>
    </div>
  </div>
  `;

  return domString;
};

export default {
  vendorCardMaker,
};
