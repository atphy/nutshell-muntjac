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
        <div class="card-body">
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
