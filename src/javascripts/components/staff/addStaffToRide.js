import rideData from '../../helpers/data/rideData';
import utils from '../../helpers/utils';
import staffData from '../../helpers/data/staff/staffData';

const addStaffToRide = (rideId) => {
  if (rideId) {
    rideData.getRideById(rideId)
      .then((response) => {
        const rideToAddStaff = Array.from(response.data.staffAssigned);
        rideToAddStaff.push(staffData.getNewStaffId());
        rideData.updateRideStaff(rideId, rideToAddStaff);
        rideData.updateRideAvailable(rideId, rideToAddStaff.length > 2);
      });
  }
};

const addEditedStaffToRide = (rideId, staffId) => {
  if (rideId) {
    rideData.getRideById(rideId)
      .then((response) => {
        const rideToAddStaff = Array.from(response.data.staffAssigned);
        rideToAddStaff.push(staffId);
        rideData.updateRideStaff(rideId, rideToAddStaff);
        rideData.updateRideAvailable(rideId, rideToAddStaff.length > 2);
      });
  }
};

const deleteStaffFromRide = (staffId) => {
  staffData.getStaffById(staffId)
    .then((staffResponse) => {
      const rideIdToRemoveFrom = staffResponse.data.jobAssignment;
      if (rideIdToRemoveFrom) {
        rideData.getRideById(rideIdToRemoveFrom)
          .then((rideResponse) => {
            const rideStaffToRemove = Array.from(rideResponse.data.staffAssigned);
            rideStaffToRemove.splice(rideStaffToRemove.indexOf(staffId), 1);
            rideData.updateRideStaff(rideIdToRemoveFrom, rideStaffToRemove);
            rideData.updateRideAvailable(rideIdToRemoveFrom, rideStaffToRemove.length > 2);
          });
      }
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

export default {
  rideList, addStaffToRide, deleteStaffFromRide, addEditedStaffToRide,
};
