import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      $('.delete-vendor').removeClass('hide');
      $('.delete-staff').removeClass('hide');
    } else {
      logoutButton.addClass('hide');
      authDiv.removeClass('hide');
      $('.delete-vendor').addClass('hide');
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
