import axios from 'axios';
import apiKeys from '../../apiKeys.json';
import utils from '../../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getVendors = () => utils.readData('Vendor');

const deleteVendor = (vendorId) => axios.delete(`${baseUrl}/Vendor/${vendorId}.json`);

const getVendorById = (id) => axios.get(`${baseUrl}/Vendor/${id}.json`);

const updateVendor = (vendorId, updatedVendor) => axios.put(`${baseUrl}/Vendor/${vendorId}.json`, updatedVendor);

const updateVendorStaff = (vendorId, updatedVendor) => axios.put(`${baseUrl}/Vendor/${vendorId}/staffAssigned.json`, updatedVendor);

const updateVendorAvailable = (vendorId, updatedVendor) => axios.put(`${baseUrl}/Vendor/${vendorId}/isAvailable.json`, updatedVendor);

const addNewVendor = (newVendorObj) => axios.post(`${baseUrl}/Vendor.json`, newVendorObj);

export default {
  addNewVendor,
  deleteVendor,
  getVendors,
  getVendorById,
  updateVendor,
  updateVendorStaff,
  updateVendorAvailable,
};
