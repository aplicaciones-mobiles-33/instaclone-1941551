// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyAsc4aUMnc5wOacCAGbP4SD4RuxFbswvRc',
    authDomain: 'insta-clone-app-b92cc.firebaseapp.com',
    projectId: 'insta-clone-app-b92cc',
    storageBucket: 'insta-clone-app-b92cc.appspot.com',
    messagingSenderId: '1068351222435',
    appId: '1:1068351222435:web:af4593584bb49cabc44516'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
