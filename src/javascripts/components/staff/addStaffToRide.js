import rideData from '../../helpers/data/rideData';
import utils from '../../helpers/utils';

const rideList = () => {
  let domString = '<option value="">No assignment</option>';
  rideData.getRides()
    .then((rides) => {
      rides.forEach((ride) => {
        domString += `<option value="${ride.id}">${ride.name}</option>`;
      });
      utils.printToDom('#staffRides', domString);
    })
    .catch((err) => console.error('bork', err));
};

export default { rideList };
