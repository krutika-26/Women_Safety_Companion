# [WOMEN SAFETY COMPANION] 🎯


### Project Description
Women Safety Companion is a web-based platform designed to provide safety features for women in distress. It includes real-time geolocation tracking and an emergency panic button that sends alerts with location information. Built with HTML, CSS, JavaScript, and a backend with Node.js, it aims to offer immediate assistance in critical situations.

### The Problem Statement
Women in distress often face difficulties in quickly accessing help due to the inefficiency of traditional safety methods like manual calls or messaging. During emergencies, communication barriers can delay assistance. Our solution provides a real-time geolocation tracking system combined with a panic button that sends an alert via email (using Formspree) to predefined contacts, ensuring immediate action can be taken.

### The Solution
We’re solving it by creating a super-smart, digital superhero—The Women Safety Companion!  When a woman is in trouble, all she has to do is press the “Help! I’m in Trouble” button, and **boom!**—an instant alert is sent to her trusted emails with her exact location. No need for any extra calls or messages! Powered by real-time geolocation magic, this app ensures that help is just a tap away, 24/7. **Safety, simplicity, and speed—because every superhero deserves a sidekick!** 

---
## Technical Details

### Technologies/Components Used

**For Software:**
- **Languages Used:** HTML, CSS, JavaScript
- **Frameworks Used:** Node.js (Backend), Express.js (API routing)
- **Libraries Used:**
  - Google Maps API (for geolocation and map integration)
  - Formspree (for email notifications)
- **Tools Used:**
  - Visual Studio Code (for coding)
  - Git/GitHub (for version control and hosting)

**For Hardware:**
- **Main Components:**
  - Smartphone: For accessing the app, location tracking, and sending alerts
  - GPS Module (if used for testing or prototype): To simulate geolocation if not relying on the phone’s GPS
  - Internet Connection: For real-time updates and API communication (Maps, Formspree, etc.)
- **Specifications:**
  - Smartphone OS: Android/iOS with support for progressive web apps (PWA) or any modern browser
  - Connectivity: Wi-Fi or mobile data for real-time GPS tracking and sending alerts
  - Display: 5-7 inch screen (minimum requirement for ease of use on a smartphone)
- **Tools Required:**
  - Device for Testing: Smartphone or tablet for testing the app’s mobile functionality
  - Developer Tools: Chrome Developer Tools, Android Studio (for testing Android-specific features)

---
## Implementation

### For Software:

#### Installation
```bash
# Clone the repository
git clone https://github.com/krutika-26/Women_Safety_Companion.git
cd Women_Safety_Companion

# Install dependencies
npm install express
npm install dotenv
npm install axios
npm install -g http-server  # Install http-server globally
```

#### Run
```bash
# Start the local development server
http-server  # Starts the server, usually at http://localhost:8080

# Start the backend server
node server.js  # Starts the Node.js server

# Use Nodemon for automatic restarts
nodemon server.js  # Automatically restarts the server when files change
```

---
## Project Documentation

### **1. Project Overview:**
- **Project Name:** Women Safety Companion
- **Description:** A web-based application that helps women in distress by providing real-time geolocation tracking and a panic button for emergency alerts.

### **2. Features:**
- **Panic Button:** Sends an SOS alert to predefined contacts via email.
- **Geolocation Tracking:** Fetches and displays the user's real-time location.
- **Map Integration:** Uses Google Maps API to visualize the user’s location.
- **Mobile-friendly:** Accessible on both desktop and mobile browsers.

### **3. Technologies Used:**

#### **Frontend:**
- **Languages:** HTML, CSS, JavaScript
- **Libraries/Frameworks:**
  - Google Maps API (for geolocation and map integration)
  - Formspree (for sending SOS emails)
- **Tools:**
  - Visual Studio Code (for development)
  - Git/GitHub (for version control)

#### **Backend:**
- **Languages:** Node.js
- **Tools:** Express.js (for handling API requests)

---
## Screenshots

![Screenshot1](screenshot/screenshot1.png)
  
*alert demo*

![Screenshot2](screenshot/screenshot2.jpg)
*Landing page with panic button and location*

![Screenshot3](screenshot/screenshot3.jpg)

Future Improvements
Twilio/Fast2SMS for SMS alerts
Emergency contact manager
Authentication system
Alert history with timestamps


This project was built during the TinkHer Hackathon 2025, focused on creating impactful, tech-based safety solutions for women.
All code, design, and implementation were completed  within 18 hours.




