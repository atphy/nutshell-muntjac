import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getVisitorData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/visitor.json`)
    .then((response) => {
      const visitorObjects = response.data;
      const visitors = [];
      if (visitorObjects) {
        Object.keys(visitorObjects).forEach((visitorId) => {
          visitorObjects[visitorId].id = visitorId;
          visitors.push(visitorObjects[visitorId]);
        });
      }
      resolve(boards);
    })
    .catch((err) => reject(err));
});

export default { getVisitorData }
