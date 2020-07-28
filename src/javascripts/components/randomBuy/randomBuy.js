// import axios from 'axios';
// import apiKeys from '../../helpers/apiKeys.json';
import utils from '../../helpers/utils';

// const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getVisitors = () => utils.readData('Visitor');
const getRides = () => utils.readData('Ride');
const getVendors = () => utils.readData('Vendor');
// const updateActivity = (newActivity) => axios.post(`${baseUrl}/visitorLog/.json`, newActivity);
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
console.error(vendorsAndRides);
const randomNum = () => [Math.floor(Math.random() * vendorsAndRides.length)];
const randomActivity = (tempRandom) => vendorsAndRides[tempRandom];
const buySomething = () => {
  console.error('is this working');
  getVisitors()
    .then((visitors) => {
      addRandom();
      visitors.forEach((visitor) => {
        console.error(visitor.name);
        const tempRandom = randomActivity(randomNum());
        console.error(vendorsAndRides[randomNum()]);
        const newActivity = {
          name: visitor.name,
          activity: tempRandom.name,
          cost: tempRandom.price,
        };
        randomThing.push(newActivity);
        // updateActivity(newActivity);
      });
      console.error(randomThing);
    })
    .catch((err) => console.error('we broke fam', err));
};

const buyEvent = () => {
  $('body').on('click', '#buy-something', buySomething);
};

export default { buyEvent };
