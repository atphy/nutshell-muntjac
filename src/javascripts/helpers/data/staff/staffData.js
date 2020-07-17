import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getStaff = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Staff.json`)
    .then((response) => {
      const staffObjects = response.data;
      const staff = [];
      Object.keys(staffObjects).forEach((staffId) => {
        staffObjects[staffId].id = staffId;
        staff.push(staffObjects[staffId]);
      });
      resolve(staff);
    })
    .catch((err) => reject(err));
});

const deleteStaff = (employeeId) => axios.delete(`${baseUrl}/Staff/${employeeId}.json`);

export default { getStaff, deleteStaff };
