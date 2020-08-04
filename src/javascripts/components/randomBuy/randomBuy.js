import axios from 'axios';
import apiKeys from '../../helpers/apiKeys.json';
import utils from '../../helpers/utils';
import domVisitors from '../visitor/visitor';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getVisitors = () => utils.readData('Visitor');
const getRides = () => utils.readData('Ride');
const getVendors = () => utils.readData('Vendor');
const updateActivity = (newActivity) => axios.post(`${baseUrl}/visitorLog/.json`, newActivity);
const updateVisitorAmount = (visitorId, newActivityPrice) => axios.put(`${baseUrl}/Visitor/${visitorId}/amtSpent.json`, newActivityPrice);

const addRandom = () => {
  getRides()
    .then((rides) => {
      getVendors()
        .then((vendors) => {
          const openRides = rides.filter((ride) => ride.isAvailable);
          const vendorsAndRides = [...openRides, ...vendors];
          getVisitors()
            .then((visitors) => {
              visitors.forEach((visitor) => {
                const randomActivity = vendorsAndRides[Math.floor(Math.random() * vendorsAndRides.length)];
                const newActivity = {
                  visitorId: visitor.id,
                  name: visitor.name,
                  activity: randomActivity.name,
                  cost: randomActivity.price,
                };
                const visitorAmt = visitor.amtSpent + newActivity.cost;
                updateActivity(newActivity);
                updateVisitorAmount(visitor.id, visitorAmt);
                domVisitors.printVisitor();
              });
            })
            .catch((err) => console.error('we broke fam', err));
        })
        .catch((err) => console.error('could not add vendor', err));
    })
    .catch((err) => console.error('could not add rides', err));
};

const buyEvent = () => {
  $('body').on('click', '#buy-something', addRandom);
};

export default { buyEvent };
