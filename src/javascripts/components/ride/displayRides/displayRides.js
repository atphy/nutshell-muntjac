import authData from '../../../helpers/data/authData';
import rideData from '../../../helpers/data/rideData';
import utils from '../../../helpers/utils';
import './displayRides.scss';

const buildRideModule = () => {
  let domString = '';
  rideData.getRides()
    .then((rides) => {
      domString += `
      <div class="alerts mt-2">`;
      rides.forEach((ride) => {
        if (!ride.isAvailable) {
          domString += `
        <div class="alert alert-danger mb-1" role="alert">
        <span class=rideName>${ride.name}</span> needs staff!`;
          if (authData.isAuthenticated()) {
            domString += `<button class="btn btn-danger ml-2 fixridebtn" data-brokenride="${ride.id}">Assign Staff<i class="fas fa-wrench btnwrench ml-1"></i></button>`;
          } else {
            domString += `<button class="btn btn-danger ml-2 fixridebtn hide" data-brokenride="${ride.id}">Assign Staff<i class="fas fa-wrench btnwrench ml-1"></i></button>`;
          }
          domString += '</div>';
        }
      });
      domString += `
      </div>
      <h2 class="homeH3 mt-2">Rides</h2>
      <div class="text-center mb-3" id="add-button"></div>
      </div>
      <div class="rideForm"></div>
      <div class="rideContainer mt-1">`;
      rides.forEach((ride) => {
        domString += `
        <div id=${ride.id} class="card rideCard" style="width: 18rem;">
        <img src="${ride.imageUrl}" class="card-img-top" alt="...">
        <div class="card-img-overlay">`;
        if (authData.isAuthenticated()) {
          domString += '<i class="fas fa-times deleteRideIcon"></i>';
        } else {
          domString += '<i class="fas fa-times deleteRideIcon hide"></i>';
        }
        domString += `
        <div class="card-header ride-price-container">$${ride.price}</div>
        <p class="card-text descriptionP">${ride.description}</p>
        </div>
        <div class="card-title rideTitle">`;
        if (authData.isAuthenticated()) {
          domString += '<i class="far fa-edit rideEditBtn"></i>';
        } else {
          domString += '<i class="far fa-edit rideEditBtn hide"></i>';
        }
        domString += ` <h5>${ride.name}</h5>`;
        if (!ride.isAvailable) {
          domString += '<i class="fas fa-wrench"></i>';
        } else {
          domString += '<i class="fas fa-thumbs-up"></i>';
        }
        domString += `
        </div>
        </div>
       
        `;
      });
      domString += '</div>';
      utils.printToDom('#content', domString);
      authData.checkLoginStatus();
    })
    .catch((err) => console.error('bork', err));
};

export default {
  buildRideModule,
};
