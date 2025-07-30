# Deployment Guide - Civiconnect

## Deploying to Netlify

### Method 1: Deploy via Netlify UI (Recommended)

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Go to [Netlify](https://netlify.com) and sign up/login**

3. **Drag and drop the `dist` folder** to the Netlify dashboard

4. **Your site will be deployed automatically!**

### Method 2: Deploy via Git (Continuous Deployment)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect your repository to Netlify:**
   - Go to Netlify Dashboard
   - Click "New site from Git"
   - Choose your repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. **Configure environment variables (optional):**
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

### Method 3: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

## Firebase Configuration

Your Firebase configuration is already set up with fallback values. For production, you can set environment variables in Netlify:

1. Go to Site Settings > Environment Variables
2. Add your Firebase config values as environment variables
3. The app will use these values automatically

## Important Notes

- ✅ **Routing is configured** for React Router
- ✅ **Build process is optimized** for production
- ✅ **Firebase authentication** will work in production
- ✅ **All dependencies are included** in the build

## Troubleshooting

If you encounter issues:

1. **Check build logs** in Netlify dashboard
2. **Verify environment variables** are set correctly
3. **Ensure Firebase project** is configured for web deployment
4. **Check browser console** for any errors

## Custom Domain

After deployment, you can:
1. Go to Site Settings > Domain Management
2. Add your custom domain
3. Configure DNS settings as instructed by Netlify 