import rideData from '../../helpers/data/rideData';
import utils from '../../helpers/utils';

const rideNameById = (staffCard, jobAssignment) => {
  if (jobAssignment) {
    rideData.getRideById(jobAssignment)
      .then((response) => {
        const ride = response.data;
        const domString = ride.name;
        utils.printToDom(staffCard, domString);
      })
      .catch((err) => console.error(err));
  }
};

export default { rideNameById };
