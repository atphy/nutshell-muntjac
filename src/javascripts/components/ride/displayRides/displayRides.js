import authData from '../../../helpers/data/authData';
import rideData from '../../../helpers/data/rideData';
import utils from '../../../helpers/utils';
import './displayRides.scss';

const buildRideModule = () => {
  let domString = '';
  rideData.getRides()
    .then((rides) => {
      domString += '<div class="alerts mt-2">';
      rides.forEach((ride) => {
        if (!ride.isAvailable) {
          domString += `
        <div class="alert alert-danger mb-1" role="alert">
        <span class=rideName>${ride.name}</span> is broken down!<button class="btn btn-danger ml-2 fixridebtn" data-brokenride="${ride.id}">Fix it<i class="fas fa-wrench btnwrench ml-1"></i></button>
        </div>`;
        }
      });
      domString += `
      </div>
      <div class="rideContainer mt-1">`;
      rides.forEach((ride) => {
        domString += `
        <div id=${ride.id} class="card rideCard" style="width: 18rem;">
        <img src="${ride.imageUrl}" class="card-img-top" alt="...">
        <div class="card-img-overlay">`;
        if (authData.isAuthenticated()) {
          domString += '<i class="fas fa-times deleteRideIcon"></i>';
        }
        domString += `
        <p class="card-text descriptionP">${ride.description}</p>
        </div>
        <div class="card-title rideTitle">
        <h5>${ride.name}</h5>`;
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
    })
    .catch((err) => console.error('bork', err));
};

export default {
  buildRideModule,
};
