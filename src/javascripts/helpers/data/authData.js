import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');

      console.error('Your user logged in: ', user);
    } else {
      logoutButton.addClass('hide');
      authDiv.removeClass('hide');
    }
  });
};

export default {
  checkLoginStatus,
};
