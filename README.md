<h1><b>Health Haven</b><h1>

Welcome to our Website! This README file provides instructions on how to set up your credentials, where to enter them, how to install and run the project, and the link to the live website.

<b>1. Procedure to Make Your Credentials</b>

To use this project, you need to create your credentials by following these steps:

Sign Up:

Standard Signup: Go to the registration page on our website and fill in the required details.

Google Signup: Alternatively, you can sign up using your Google account by clicking on the Sign up with Google button.

Generate Firebase Credentials: To get your Firebase credentials, follow these steps:

  1.Go to the Firebase Console and log in with your Google account.
  
  2.Click on Add project and follow the steps to create a new Firebase project.
  
  3.Once your project is created, go to Project settings by clicking on the gear icon.
  
  4.In your apps section, click on Add app and select the platform (e.g., web).
  
  5.Follow the instructions to register the app and get your Firebase configuration.

<b>2. Where to Enter Your Credentials</b>

Your credentials need to be entered in the Firebase configuration file of the project. Follow these steps:

Locate Configuration File: Find the firebase.config.js file in the root directory of the project.

Open File: Open firebase.config.js with a text editor.

Insert Credentials: Replace the placeholder values with your actual credentials. The file should look like this:

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export default firebaseConfig;

<b>3. How to Install and Run</b>
 
To install and run the project, follow these steps:

Clone Repository:

git clone https://github.com/vaishu-15/Health_Heaven.git

Navigate to Project Directory:

Install Dependencies:

<b>npm install</b>

Run the Project:

<b>npm start</b>

This will start the project on your local server.

<b>4. Live Website Link</b>
 
You can access the live version of the project at the following link: 

Thank you for using our project! If you have any questions, please refer to the documentation or contact our support team.
