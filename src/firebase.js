import firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyCIuB6Kexm8KwyXY3mWps0mVdjTNj4_pwA",
    authDomain: "pokedex-1dd67.firebaseapp.com",
    databaseURL: "https://pokedex-1dd67.firebaseio.com",
    projectId: "pokedex-1dd67",
    storageBucket: "pokedex-1dd67.appspot.com",
    messagingSenderId: "995175569179",
    appId: "1:995175569179:web:71d3682b5efa2cd6be65be",
    measurementId: "G-C99FE4CGZ7"
  };

  const devConfig = {
    apiKey: "AIzaSyCIuB6Kexm8KwyXY3mWps0mVdjTNj4_pwA",
    authDomain: "pokedex-1dd67.firebaseapp.com",
    databaseURL: "https://pokedex-1dd67.firebaseio.com",
    projectId: "pokedex-1dd67",
    storageBucket: "pokedex-1dd67.appspot.com",
    messagingSenderId: "995175569179",
    appId: "1:995175569179:web:71d3682b5efa2cd6be65be",
    measurementId: "G-C99FE4CGZ7"
  };

  const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

  
export const fnirebaseImpl = firebase.initializeApp(config);