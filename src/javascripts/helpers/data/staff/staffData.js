import axios from 'axios';
import apiKeys from '../../apiKeys.json';
import utils from '../../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getStaff = () => utils.readData('Staff');

// const addStaff = (newStaffObj) => axios.post(`${baseUrl}/Staff.json`, newStaffObj);

let newStaffId = '';

const getNewStaffId = () => {
  console.warn(newStaffId);
  return newStaffId;
};

const addStaff = (newStaffObj) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/Staff.json`, newStaffObj)
    .then((response) => {
      newStaffId = response.data.name;
      resolve(newStaffObj);
    })
    .catch((err) => reject(err));
});

const deleteStaff = (employeeId) => axios.delete(`${baseUrl}/Staff/${employeeId}.json`);

const getStaffById = (id) => axios.get(`${baseUrl}/Staff/${id}.json`);

const updateStaff = (id, updateStaffObj) => axios.put(`${baseUrl}/Staff/${id}.json`, updateStaffObj);

export default {
  getStaff,
  deleteStaff,
  addStaff,
  getStaffById,
  updateStaff,
  getNewStaffId,
};
