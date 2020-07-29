import rideData from '../../helpers/data/rideData';
import utils from '../../helpers/utils';

let i = 0;

const rideNameById = (jobAssignment) => {
  rideData.getRideById(jobAssignment)
    .then((response) => {
      const ride = response.data;
      const domString = ride.name;
      console.warn(domString);
      utils.printToDom(`#ride-assign${i}`, domString);
      i += 1;
    })
    .catch((err) => console.error(err));
};

export default { rideNameById };

// Okay here's the deal
// This is SUPPOSED to accept an argument of jobAssignment.
// That jobAssignment is being pulled from the staff info and should match an ride's ID.
// This function will then search the rides for the matching ID and pull the name to print to the staff card.
// I've tried it a couple different ways. If returning the domString, the idea is to add that returned string on each iteration.
// The problem with that is that it gives me undefined, even when it console warns out just fine.
// I can get it to print to a card by ID or class, but each one presents a different issue,
// ID only acts on the first card, and class acts by putting the same value on every card.
