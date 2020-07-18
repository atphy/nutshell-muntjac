import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getVendors = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Vendor.json`)
    .then((response) => {
      const vendorObjects = response.data;
      const vendors = [];

      if (vendorObjects) {
        Object.keys(vendorObjects).forEach((vendorId) => {
          vendorObjects[vendorId].id = vendorId;
          vendors.push(vendorObjects[vendorId]);
        });
      }

      resolve(vendors);
    })
    .catch((err) => reject(err));
});

const deleteVendor = (vendorId) => axios.delete(`${baseUrl}/Vendor/${vendorId}.json`);

export default {
  deleteVendor,
  getVendors,
};
