import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../utils';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      $('.delete-vendor').removeClass('hide');
      $('.edit-vendor').removeClass('hide');
      $('#add-vendor').removeClass('hide');
      $('#new-vendor-form').removeClass('hide');
      $('#edit-vendor-form').removeClass('hide');
      $('.delete-staff').removeClass('hide');
    } else {
      logoutButton.addClass('hide');
      authDiv.removeClass('hide');
      $('.delete-vendor').addClass('hide');
      $('.edit-vendor').addClass('hide');
      $('#add-vendor').addClass('hide');
      $('#new-vendor-form').addClass('hide');
      $('#edit-vendor-form').addClass('hide');
      utils.printToDom('#new-vendor-form', '');
      $('.delete-staff').addClass('hide');
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
