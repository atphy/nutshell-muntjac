import axios from 'axios';
import apiKeys from '../../helpers/apiKeys.json';
import utils from '../../helpers/utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getVisitors = () => utils.readData('Visitor');
const getRides = () => utils.readData('Ride');
const getVendors = () => utils.readData('Vendor');
const updateActivity = (newActivity) => axios.post(`${baseUrl}/visitorLog/.json`, newActivity);
const vendorsAndRides = [];
const randomThing = [];

const addRandom = () => {
  getRides()
    .then((rides) => {
      rides.forEach((ride) => {
        vendorsAndRides.push(ride);
      });
    })
    .catch((err) => console.error('could not add rides', err));

  getVendors()
    .then((vendors) => {
      vendors.forEach((vendor) => {
        vendorsAndRides.push(vendor);
      });
    })
    .catch((err) => console.error('could not add vendor', err));
};

const randomActivity = () => vendorsAndRides[Math.floor(Math.random() * vendorsAndRides.length)];

const buySomething = () => {
  getVisitors()
    .then((visitors) => {
      visitors.forEach((visitor) => {
        const newActivity = {
          name: visitor.name,
          activity: randomActivity().name,
          cost: randomActivity().price,
        };
        randomThing.push(newActivity);
        updateActivity(newActivity);
      });
    })
    .catch((err) => console.error('we broke fam', err));
};

const buyEvent = () => {
  $('body').on('click', '#buy-something', buySomething);
};

export default { buyEvent, addRandom };
