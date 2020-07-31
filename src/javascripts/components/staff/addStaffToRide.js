import rideData from '../../helpers/data/rideData';
import utils from '../../helpers/utils';
import staffData from '../../helpers/data/staff/staffData';

const addStaffToRide = (rideId) => {
  rideData.getRideById(rideId)
    .then((response) => {
      const rideToAddStaff = Array.from(response.data.staffAssigned);
      // rideToAddStaff.from(response.data.staffAssigned.data);
      rideToAddStaff.push(staffData.getNewStaffId());
      rideData.updateRideStaff(rideId, rideToAddStaff);
    });
};

const rideList = () => {
  let domString = '<option value="">No assignment</option>';
  rideData.getRides()
    .then((rides) => {
      rides.forEach((ride) => {
        domString += `<option value="${ride.id}">${ride.name}</option>`;
      });
      utils.printToDom('#staff-rides', domString);
    })
    .catch((err) => console.error('bork', err));
};

export default { rideList, addStaffToRide };
