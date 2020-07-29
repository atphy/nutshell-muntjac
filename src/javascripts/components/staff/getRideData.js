import rideData from '../../helpers/data/rideData';

const rideNameById = (jobAssignment) => {
  rideData.getRideById(jobAssignment)
    .then((response) => {
      const ride = response.data;
      const domString = `${ride.name}`;
      return domString;
    })
    .catch((err) => console.error(err));
};

export default { rideNameById };
