# Portfolio Website with Google Apps Script Backend

This is a dynamic portfolio website that uses **Google Apps Script** as a serverless backend and **Google Drive** as a database/CMS. This allows you to update your content (projects, skills, experience, etc.) and theme directly from the website's Admin Panel without touching the code.

## Features
-   **Dynamic Content**: All content is fetched from a JSON file stored in Google Drive.
-   **Admin Panel**: Built-in admin dashboard to edit profile, skills, projects, and more.
-   **Theme System**: Switch between Dark and Light modes, and customize colors from the admin panel.
-   **File Uploads**: Upload images and documents directly to Google Drive.
-   **Responsive Design**: Fully responsive layout for all devices.

---

## 🚀 Setup Guide

### Part 1: Google Drive Setup (Database)

1.  Go to [Google Drive](https://drive.google.com/).
2.  Create a new folder named `portfolio`.
3.  Inside this folder, create a sub-folder named `Assests`. **Note the ID of this folder** (it's the string of characters at the end of the URL).
4.  Create three empty text files on your computer named `siteData.json`, `theme.json`, and `config.json`.
5.  Paste the **Sample Data** provided below into these files.
6.  Upload these three files to the `Portfolio-Data` folder in Google Drive.
7.  **Important**: Get the **File ID** for each of these three files. You can do this by right-clicking the file -> Share -> Copy Link. The ID is the part between `/d/` and `/view`.

### Part 2: Google Apps Script Setup (Backend)

1.  Go to [script.google.com](https://script.google.com/) and create a **New Project**.
2.  Name it "Portfolio Backend".
3.  Delete any code in the `Code.gs` file and paste the **Backend Code** provided below.
4.  **Update the Constants** at the top of the file with your File IDs and Folder ID from Part 1:
    ```javascript
    const SITE_DATA_FILE_ID = "YOUR_SITE_DATA_FILE_ID";
    const THEME_FILE_ID = "YOUR_THEME_FILE_ID";
    const CONFIG_FILE_ID = "YOUR_CONFIG_FILE_ID";
    const UPLOAD_FOLDER_ID = "YOUR_UPLOADS_FOLDER_ID";
    const EXPECTED_TOKEN = "MySecretToken123"; // Change this to a secure secret
    ```
5.  Click the **Deploy** button (top right) -> **New deployment**.
6.  Select type: **Web app**.
7.  Description: "v1".
8.  Execute as: **Me**.
9.  Who has access: **Anyone** (This is crucial for the site to work for visitors).
10. Click **Deploy**.
11. Copy the **Web App URL** (it ends with `/exec`).

### Part 3: Frontend Configuration

1.  Open the `script.js` file in this repository.
2.  Update the `API_BASE_URL` and `API_TOKEN` at the top:
    ```javascript
    const API_BASE_URL = "YOUR_WEB_APP_URL"; // Paste the URL from Part 2
    const API_TOKEN = "MySecretToken123"; // Must match the token in Code.gs
    ```
3.  Save the file.

### Part 4: Deployment

You can host this website on **GitHub Pages**, Netlify, or Vercel.

**GitHub Pages:**
1.  Push this code to a GitHub repository.
2.  Go to Settings -> Pages.
3.  Select the `main` branch and save.
4.  Your site will be live!

---

## 📂 Backend Code & Data

Since the backend logic and data structure are not stored in the repo, here is everything you need to recreate them.

### 1. Backend Code (`Code.gs`)

Copy this into your Google Apps Script project.

```javascript
/* 
  GOOGLE APPS SCRIPT BACKEND
  Filename: Code.gs
*/

// REPLACE THESE WITH YOUR ACTUAL IDS
const SITE_DATA_FILE_ID = "REPLACE_WITH_FILE_ID";
const THEME_FILE_ID = "REPLACE_WITH_FILE_ID";
const CONFIG_FILE_ID = "REPLACE_WITH_FILE_ID";
const UPLOAD_FOLDER_ID = "REPLACE_WITH_FOLDER_ID";
const EXPECTED_TOKEN = "REPLACE_WITH_YOUR_TOKEN"; 

function doGet(e) { return handleRequest(e); }
function doPost(e) { return handleRequest(e); }

function handleRequest(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const params = e.parameter;
    const action = params.action;
    const token = params.token;

    if (token !== EXPECTED_TOKEN) {
      return responseJSON({ error: "Unauthorized", success: false });
    }

    if (action === "getData") {
      return getJsonContent(SITE_DATA_FILE_ID);
    } else if (action === "saveData") {
      const data = JSON.parse(e.postData.contents);
      return saveJsonContent(SITE_DATA_FILE_ID, data);
    } else if (action === "getTheme") {
      return getJsonContent(THEME_FILE_ID);
    } else if (action === "saveTheme") {
      const data = JSON.parse(e.postData.contents);
      return saveJsonContent(THEME_FILE_ID, data);
    } else if (action === "login") {
      const creds = JSON.parse(e.postData.contents);
      return handleLogin(creds);
    } else if (action === "uploadFile") {
      const data = JSON.parse(e.postData.contents);
      return uploadFile(data);
    } else {
      return responseJSON({ error: "Invalid Action", success: false });
    }

  } catch (err) {
    return responseJSON({ error: err.toString(), success: false });
  } finally {
    lock.releaseLock();
  }
}

function getJsonContent(fileId) {
  const file = DriveApp.getFileById(fileId);
  const content = file.getBlob().getDataAsString();
  return responseJSON(JSON.parse(content));
}

function saveJsonContent(fileId, jsonData) {
  const file = DriveApp.getFileById(fileId);
  file.setContent(JSON.stringify(jsonData, null, 2));
  return responseJSON({ success: true });
}

function handleLogin(creds) {
  const file = DriveApp.getFileById(CONFIG_FILE_ID);
  const config = JSON.parse(file.getBlob().getDataAsString());
  
  if (creds.username === config.admin.username && creds.password === config.admin.password) {
    return responseJSON({ success: true });
  } else {
    return responseJSON({ success: false, error: "Invalid credentials" });
  }
}

function uploadFile(payload) {
  const folder = DriveApp.getFolderById(UPLOAD_FOLDER_ID);
  const blob = Utilities.newBlob(Utilities.base64Decode(payload.data), payload.mimeType, payload.filename);
  const file = folder.createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  
  // Return direct-ish link format.
  const directLink = "https://lh3.googleusercontent.com/d/" + file.getId();
  
  return responseJSON({ success: true, url: directLink });
}

function responseJSON(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 2. Sample Data Files

#### `config.json` (Admin Credentials)
Replace the username and password with your desired credentials.

```json
{
  "admin": {
    "username": "admin",
    "password": "password123"
  }
}
```

#### `theme.json` (Theme Settings)

```json
{
  "activeMode": "dark",
  "dark": {
    "primaryColor": "#64ffda",
    "secondaryColor": "#10b981",
    "backgroundColor": "#0a192f",
    "surfaceColor": "#112240",
    "surfaceLightColor": "#233554",
    "accentColor": "#f97316",
    "textColor": "#e6f1ff",
    "textMutedColor": "#8892b0",
    "borderRadius": "4px",
    "cardRadius": "12px",
    "buttonRadius": "999px",
    "fontFamily": "'Poppins', system-ui, sans-serif"
  },
  "light": {
    "primaryColor": "#2563eb",
    "secondaryColor": "#16a34a",
    "backgroundColor": "#f8fafc",
    "surfaceColor": "#ffffff",
    "surfaceLightColor": "#e2e8f0",
    "accentColor": "#ea580c",
    "textColor": "#0f172a",
    "textMutedColor": "#64748b",
    "borderRadius": "4px",
    "cardRadius": "12px",
    "buttonRadius": "999px",
    "fontFamily": "'Poppins', system-ui, sans-serif"
  }
}
```

#### `siteData.json` (Content)

```json
{
  "profile": {
    "name": "Your Name",
    "role": "Your Role",
    "bio": "Your short bio here.",
    "aboutDesc": "Your detailed about me description.",
    "location": "City, Country",
    "email": "email@example.com",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "photoUrl": ""
  },
  "skills": {
    "languages": [
      { "name": "JavaScript", "iconUrl": "" },
      { "name": "Python", "iconUrl": "" }
    ],
    "tools": [
      { "name": "Git", "iconUrl": "" }
    ]
  },
  "experience": [
    {
      "role": "Software Engineer",
      "company": "Tech Corp",
      "location": "Remote",
      "date": "2023 - Present",
      "desc": "Working on cool stuff.",
      "docUrl": ""
    }
  ],
  "education": [],
  "projects": [],
  "research": [],
  "documents": [],
  "userSections": []
}
```
