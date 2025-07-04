
# Candidate Portal System

## Features
- Firebase login (email/password)
- Candidate profile form (name, phone, skills, resume)
- Google Sheet backend with timestamp
- Apps Script handles data processing

## Setup Steps

1. Create a Firebase project
   - Enable Email/Password Auth
   - Replace the `firebase-config.js` with your Firebase keys

2. Set up your Google Sheet:
   - Columns: Email, Name, Phone, Skills, Resume URL, Last Updated

3. Add the `Apps Script` code in Extensions > Apps Script in your Google Sheet
   - Deploy as a Web App (select "Anyone" access)
   - Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` in `form-submit.js`

4. Serve `index.html` via GitHub Pages or local server

## Live Example
You can test it locally or deploy to Netlify/GitHub Pages
