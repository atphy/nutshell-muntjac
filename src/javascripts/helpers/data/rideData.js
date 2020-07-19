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

const updateRide = (rideId, updatedRide) => axios.put(`${baseUrl}/Ride/${rideId}.json`, updatedRide);

const addNewRide = (newRideObj) => axios.post(`${baseUrl}/Ride.json`, newRideObj);

export default {
  getRides,
  deleteRide,
  updateRide,
  addNewRide,
};
