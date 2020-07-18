import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getStaff = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Staff.json`)
    .then((response) => {
      const staffObjects = response.data;
      const staff = [];
      Object.keys(staffObjects).forEach((employeeId) => {
        staffObjects[employeeId].id = employeeId;
        staff.push(staffObjects[employeeId]);
      });
      resolve(staff);
    })
    .catch((err) => reject(err));
});

const addStaff = (newStaffObj) => axios.post(`${baseUrl}/Staff.json`, newStaffObj);

const deleteStaff = (employeeId) => axios.delete(`${baseUrl}/Staff/${employeeId}.json`);

export default {
  getStaff,
  deleteStaff,
  addStaff,
};
