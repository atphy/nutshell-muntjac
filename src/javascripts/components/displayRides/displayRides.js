import rideData from '../../helpers/data/rideData';
import utils from '../../helpers/utils';
import './displayRides.scss';

const buildRideModule = () => {
  let domString = '<div class="rideContainer">';
  rideData.getRides()
    .then((rides) => {
      rides.forEach((ride) => {
        domString += `
        <div class="card rideCard" style="width: 18rem;">
        <img src="${ride.imageUrl}" class="card-img-top" alt="...">
        <div class="card-img-overlay">
        <i class="fas fa-times deleteRideIcon"></i>
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
        <div class="card-body rideBody">
        <p class="card-text">${ride.description}</p>
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
