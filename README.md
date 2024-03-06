# react-registration-flow
Mobile-First Responsive App with Registration and Image Upload

## Installation
- Clone the repository or download the project files.
- Navigate to the project directory: cd react-registration-flow.
- Install dependencies: npm install.

## Technologies:

React
React Router DOM (for navigation)
Axios (or preferred library for API calls - replace accordingly)
React Hook Form (for form validation and management)
A mobile-first CSS

# Project Structure:

src/
  - App.js               (Main application component)
    - ImageUpload.js      (Component for image selection and upload)
    - UserDetails.js       (Component for user registration details)
    - VerificationCode.js  (Component for displaying verification code)
    - SuccessScreen.js     (Component for displaying success message)
    - WelcomeScreen.js    (Landing page)
    - App.css            (Global styles or styles for Bootstrap setup)
    - UserDetails.css      (Specific styles for UserDetails component)
    - ImageUpload.css     (Specific styles for ImageUpload component)
    - VerificationCode.css  (Specific styles for VerificationCode component)
    - SuccessScreen.css     (Specific styles for SuccessScreen component)
    - WelcomeScreen.css     (Specific styles for WelcomeScreen component)

# Features:

Mobile-First Responsive Design: Adapts seamlessly to different screen sizes.
User Registration Flow:
Welcome screen
User Details screen with validation:
First name
Last name
Email (with email format validation)
Mobile number (with mobile number format validation)
Password (with password strength requirements)
Verification Code screen (placeholder for actual code generation logic)
Image Upload:
Option to capture a photo or select from gallery.
Image preview.
Upload button (simulated upload logic for demonstration).
Navigation: Smooth transitions between screens using React Router DOM.

# Running the App:
start the development server: npm start
Open your browser and go to http://localhost:3000 to view the application.

## Follow the application flow by navigating through different screens:

Start with the welcome screen.
Proceed to the user details screen to fill out the registration form.
After submitting the form, proceed to the verification code screen to enter the OTP.
Upon successful verification, proceed to the image upload screen to upload an image.
Finally,upon successful image upload, you will be redirected to the success screen.
You can also check the console for logs and errors during the application flow.



