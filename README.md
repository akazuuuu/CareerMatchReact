# CareerMatch

## Overview

**CareerMatch** is a job-matching web app that combines the convenience of job boards with the swipe mechanics of dating apps. It connects job seekers and employers in an interactive, real-time environment for faster and smarter hiring.

---

**Key Features**
- Swipe right to apply, left to skip  
- Separate dashboards for seekers and employers  
- Fully responsive across devices  
- Real-time updates powered by Firebase  

---

## Main Features

   **For Job Seekers**
     - Swipe-to-Apply interface  
     - Resume Builder 

   **For Employers**
     - Swipe to review candidates  
     - Job posting  

---

## Tech Stack

**Frontend:** React 18, React Router, React Hooks, Custom CSS  
**Backend:** Firebase Firestore, Firebase Storage, Realtime Database  
**APIs:** SheetDB for authentication and data sync  
**Hosting:** Firebase Hosting  

---

## Website Flow

**Index Page (Landing Page)**
Welcomes users with a modern, responsive design featuring a video background (desktop) or static image (mobile). Highlights key stats and includes clear CTAs for registration or starting the swiping experience.

**Jobs Landing Page**
Introduces job seekers to sample job cards and call-to-action buttons for signing in or registering. Built with React.js and custom CSS for responsiveness.

**Role Selection Page**
Allows users to select between Job Seeker or Company roles using a clean split layout and navigates to the corresponding login page.

**Login & Registration Pages**
Secure and user-friendly forms for both seekers and employers, powered by SheetDB. Includes form validation, responsive layouts, and optional social login placeholders.

**Main Page (Swipe Interface)**
Central hub for job seekers—displays job postings from Firebase in swipeable cards. Users can swipe right to apply or left to decline, with real-time updates saved to Firestore.

**Seeker Profile Page**
Displays organized profile details such as skills, experience, and contact info. Includes options to download resumes or contact candidates directly.

**Resume Builder**
Interactive resume creation tool allowing seekers to add personal, educational, and professional details and upload images—saved to Firebase Firestore.

**Company Dashboard (View Applicants)**
Employers can review applicants in a Tinder-style swipe interface showing profiles, skills, and experience. Built with React.js and Firestore for real-time interactivity.

**Job Post Page**
Employers can create detailed job listings with live logo preview and real-time Firebase integration. Displays success or error alerts upon submission.

---

## Installation

1. Clone the Repository: git clone https://github.com/yourusername/careermatch.git
2. Navigate to the project directory: cd careermatch
3. Install dependencies: npm install
4. Run the app Locally: npm start

---

### Prerequisites
- Node.js v24.9.0  
- npm 
- Firebase project set up  





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
