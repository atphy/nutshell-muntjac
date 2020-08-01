import staffList from '../staff/staffList';
import displayRides from '../ride/displayRides/displayRides';
import visitor from '../visitor/visitor';
import vendorList from '../vendor/vendorList';
import randomBuy from '../randomBuy/randomBuy';
import utils from '../../helpers/utils';

const staffClick = () => {
  staffList.buildStaffModule();
  utils.selector('staff');
};

const rideClick = () => {
  displayRides.buildRideModule();
  utils.selector('rides');
};

const visitorClick = () => {
  visitor.printVisitor();
  utils.selector('visitors');
};

const vendorClick = () => {
  vendorList.buildVendorList();
  utils.selector('vendors');
};

const navListeners = () => {
  $('body').on('click', '#navbar-staff', staffClick);
  $('body').on('click', '#navbar-rides', rideClick);
  $('body').on('click', '#navbar-visitors', visitorClick);
  $('body').on('click', '#navbar-visitors', randomBuy.addRandom);
  $('body').on('click', '#navbar-vendors', vendorClick);
  $('body').on('click', '.fixridebtn', staffClick);
};

export default { navListeners };
