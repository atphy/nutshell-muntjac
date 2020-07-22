import axios from 'axios';
import apiKeys from '../../apiKeys.json';
import utils from '../../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getStaff = () => utils.readData('Staff');

const addStaff = (newStaffObj) => axios.post(`${baseUrl}/Staff.json`, newStaffObj);

const deleteStaff = (employeeId) => axios.delete(`${baseUrl}/Staff/${employeeId}.json`);

const getStaffById = (id) => axios.get(`${baseUrl}/Staff/${id}.json`);

const updateStaff = (id, updateStaffObj) => axios.put(`${baseUrl}/Staff/${id}.json`, updateStaffObj);

export default {
  getStaff,
  deleteStaff,
  addStaff,
  getStaffById,
  updateStaff,
};
