import rideData from '../../helpers/data/rideData';
import utils from '../../helpers/utils';

let i = 0;

const rideNameById = (jobAssignment) => {
  rideData.getRideById(jobAssignment)
    .then((response) => {
      const ride = response.data;
      const domString = ride.name;
      console.warn(domString);
      utils.printToDom(`#ride-assign${i}`, domString);
      i += 1;
    })
    .catch((err) => console.error(err));
};

export default { rideNameById };
