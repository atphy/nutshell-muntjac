import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getRides = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Ride.json`)
    .then((response) => {
      const rideObjects = response.data;
      const rides = [];
      if (rideObjects) {
        Object.keys(rideObjects).forEach((rideId) => {
          rideObjects[rideId].id = rideId;
          rides.push(rideObjects[rideId]);
        });
      }
      resolve(rides);
    })
    .catch((err) => reject(err));
});

const deleteRide = (rideId) => axios.delete(`${baseUrl}/Ride/${rideId}.json`);

export default {
  getRides,
  deleteRide,
};
