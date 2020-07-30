import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getRides = () => utils.readData('Ride');

const deleteRide = (rideId) => axios.delete(`${baseUrl}/Ride/${rideId}.json`);

const getRideById = (id) => axios.get(`${baseUrl}/Ride/${id}.json`);

const updateRide = (rideId, updatedRide) => axios.put(`${baseUrl}/Ride/${rideId}.json`, updatedRide);

const addNewRide = (newRideObj) => axios.post(`${baseUrl}/Ride.json`, newRideObj);

const addNewStaffRide = (rideId, newRideObj) => axios.post(`${baseUrl}/Ride/${rideId}.json`, newRideObj);

export default {
  getRides,
  deleteRide,
  updateRide,
  addNewRide,
  getRideById,
  addNewStaffRide,
};
