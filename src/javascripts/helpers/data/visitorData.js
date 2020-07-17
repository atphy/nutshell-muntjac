import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getVisitorData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Visitor.json`)
    .then((response) => {
      const visitorObjects = response.data;
      const visitors = [];
      if (visitorObjects) {
        Object.keys(visitorObjects).forEach((visitorId) => {
          visitorObjects[visitorId].id = visitorId;
          visitors.push(visitorObjects[visitorId]);
        });
      }
      resolve(visitors);
    })
    .catch((err) => reject(err));
});

const deleteVisitor = (visitorId) => axios.delete(`${baseUrl}/Visitor/${visitorId}.json`);

export default {
  getVisitorData,
  deleteVisitor,
};
