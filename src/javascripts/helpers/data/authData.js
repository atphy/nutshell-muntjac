import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../utils';

import addButton from '../../components/addButton/addButton';
import modButtons from '../../components/modButtons/modButtons';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      $('.delete-vendor').removeClass('hide');
      $('.edit-vendor').removeClass('hide');
      $('#edit-vendor-form').removeClass('hide');
      $('.update-visitor').removeClass('hide');
      $('.remove-visitor').removeClass('hide');
      $('.rideEditBtn').removeClass('hide');
      $('.deleteRideIcon').removeClass('hide');
      $('.fixridebtn').removeClass('hide');
      addButton.printAddButton();
      modButtons.printModButtons();
    } else {
      logoutButton.addClass('hide');
      authDiv.removeClass('hide');
      $('.delete-vendor').addClass('hide');
      $('.edit-vendor').addClass('hide');
      $('#edit-vendor-form').addClass('hide');
      $('.update-visitor').addClass('hide');
      $('.remove-visitor').addClass('hide');
      $('.rideEditBtn').addClass('hide');
      $('.deleteRideIcon').addClass('hide');
      $('.fixridebtn').addClass('hide');
      utils.signedOut();
    }
  });
};

const isAuthenticated = () => {
  if (firebase.auth().currentUser) {
    return true;
  }
  return false;
};

export default {
  checkLoginStatus,
  isAuthenticated,
};
