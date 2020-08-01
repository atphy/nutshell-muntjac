import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import listeners from './helpers/listeners';
import homescreen from './components/homescreen/homescreen';
import navbar from './components/navbar/navbar';
import visitors from './components/visitor/visitor';
import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  auth.loginButton();
  auth.logoutEvent();
  listeners.createListeners();
  homescreen.buildHomeScreen();
  navbar.navListeners();
  authData.checkLoginStatus();
  visitors.callVisitors();
};

init();
