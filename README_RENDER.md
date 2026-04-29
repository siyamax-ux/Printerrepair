# 🚀 Printer Repair Shop - Deployment Guide (Render)

This guide will walk you through deploying your MERN stack application to **Render**.

## 1. Prerequisites
- A **GitHub** account with your code pushed to a repository.
- A **MongoDB Atlas** account (or any hosted MongoDB).
- A **Render** account.

## 2. Prepare your Database
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new cluster (Shared/Free tier).
3. Under **Network Access**, add `0.0.0.0/0` (Allow access from anywhere).
4. Under **Database Access**, create a user with a password.
5. Get your **Connection String** (e.g., `mongodb+srv://user:password@cluster.mongodb.net/printer_repair?retryWrites=true&w=majority`).

## 3. Deploy to Render

### Step A: Create a New Web Service
1. Log in to [Render](https://render.com/).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository.

### Step B: Configure the Web Service
- **Name:** `printer-repair-shop` (or your choice)
- **Environment:** `Node`
- **Root Directory:** `(leave blank)`
- **Build Command:** `npm run build`
- **Start Command:** `npm start`

### Step C: Set Environment Variables
Click on the **Advanced** button and add the following Environment Variables:
1. `MONGODB_URI` = `your_mongodb_connection_string`
2. `NODE_ENV` = `production`

## 4. How the App Works Now
- **Unified Build:** The app now has a root `package.json` that builds both the frontend and backend in one go.
- **Static Serving:** The backend (`server/index.js`) is configured to serve the frontend build files from the `client/dist` folder.
- **Relative API:** The frontend calls the API using relative paths (e.g., `/api/bookings`), meaning it will always look for the API on the same domain it is hosted on.

## 5. Troubleshooting
- If you see a "White Screen" after deployment, check the Render logs to ensure `npm run build` finished successfully and `client/dist` exists.
- Ensure your MongoDB Atlas IP whitelist allows connections from anywhere (`0.0.0.0/0`).

---
Built with ❤️ by Antigravity
