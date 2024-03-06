# react-registration-flow
Mobile-First Responsive App with Registration and Image Upload

## Installation
- Clone the repository or download the project files.
- Navigate to the project directory: cd react-registration-flow.
- Install dependencies: npm install.
- start the development server: npm start
- Open your browser and go to http://localhost:3000 to view the application.

## Technologies & Running the App:

React,
React Router DOM,
Axios,
React Hook Form,
A mobile-first CSS,

# Project Structure:

  - App.js               
    - ImageUpload.js      
    - UserDetails.js       
    - VerificationCode.js  
    - SuccessScreen.js    
    - WelcomeScreen.js   
    - App.css            
    - UserDetails.css
    - ImageUpload.css     
    - VerificationCode.css  
    - SuccessScreen.css     
    - WelcomeScreen.css   

# Features:

1. Mobile-First Responsive Design: Adapts seamlessly to different screen sizes.
2. User Registration Flow:
3. Welcome screen
4. User Details screen with validation:
   - First name
   - Last name
   - Email (with email format validation)
   - Mobile number (with mobile number format validation)
   - Password (with password strength requirements)
   - Verification Code screen (placeholder for actual code generation logic)
   - Image Upload:
       - Option to capture a photo or select from gallery.
       - Image preview.
       - Upload button (simulated upload logic for demonstration).
5. Navigation: Smooth transitions between screens using React Router DOM.

## Follow the application flow by navigating through different screens:

- Start with the welcome screen.
- Proceed to the user details screen to fill out the registration form.
- After submitting the form, proceed to the verification code screen to enter the OTP.
- Upon successful verification, proceed to the image upload screen to upload an image.
- Finally,upon successful image upload, you will be redirected to the success screen.
- You can also check the console for logs and errors during the application flow.



