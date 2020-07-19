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
      $('.show-staff-form').removeClass('hide');
      $('#add-staff-form').removeClass('hide');
      $('#new-vis').removeClass('hide');
      $('.update-visitor').removeClass('hide');
      $('.remove-visitor').removeClass('hide');
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
      $('.show-staff-form').addClass('hide');
      $('#add-staff-form').addClass('hide');
      $('#new-vis').addClass('hide');
      $('.update-visitor').addClass('hide');
      $('.remove-visitor').addClass('hide');
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
