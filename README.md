# GymBuddy
GymBuddy - A Fitness Tracker Mobile App
GymBuddy is a full-stack fitness tracking mobile application built using the MERN stack (MongoDB, Express.js, React Native, and Node.js). It is designed to help users track their workouts and meal plans, visualize progress, and manage settings—all from a user-friendly mobile interface.

Input
The application requires user input primarily through the mobile interface. 

Users can:

Add new workouts by entering workout names.
Add meals or nutrition items for their daily diet plans.
Modify toggle-based settings like notifications or dark mode.
(In the future) Log in with credentials to access a personalized experience.
Data entered by the user is sent to the backend via HTTP requests and stored in a MongoDB database. Workouts and meals are retrieved dynamically from the database and displayed using interactive UI components.

Features
Workout Tracker: Users can view a list of workouts and add new ones dynamically. Workouts are stored in MongoDB and synced live with the app using REST APIs.
Nutrition Planner: Users can track meals and dietary plans, add new entries, and update them, with all changes reflected in real-time from the database.
Home Dashboard: Visual representation of weekly progress using a line chart and motivational quotes for encouragement.
Settings Panel: Toggle dark mode, enable or disable notifications, and log out of the app. The logout button refreshes the app and redirects the user to the login page.
Login Page: Handles basic access to the app, enabling future authentication logic.
Cloud-hosted Backend: Using GitHub Codespaces or similar environments, the backend API is served through a development tunnel and connected to MongoDB.
Process
The app follows a clear modular architecture:

Frontend (React Native with Expo Router):

Built with a stack-based navigation using expo-router.
Components like Workouts, Nutrition, Settings, and Home are organized under the app/ directory.
Uses axios for communicating with the backend and fetching or submitting data.
FlatList, Buttons, LineCharts, and Alert APIs are used to render dynamic UI and manage interactivity.
Backend (Express + Node.js):

A REST API built with Express handles GET and POST requests for /api/workouts and /api/meals.
MongoDB is used as the database to store and retrieve workouts and meal data.
Dummy data is inserted into the database on setup to simulate user content.
Deployment:

The backend is run in GitHub Codespaces and exposed using its port forwarding feature.
The frontend mobile app connects to the backend using this forwarded public URL.
Output
Upon using the app, users see a clean and responsive mobile interface with:

A motivational dashboard and progress chart on the home screen.
A scrollable list of workouts or meal plans retrieved from the database.
Instant ability to add new workouts or meals, with backend syncing.
A functional settings page where they can toggle preferences and securely log out.
After logout, the app resets state and navigates the user back to the login page for fresh access.
This setup enables a seamless full-stack mobile experience that can be extended for advanced features like authentication, progress history, goal tracking, and push notifications.

