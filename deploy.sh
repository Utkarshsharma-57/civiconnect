#!/bin/bash

echo "🚀 Building Civiconnect for production..."

# Build the project
npm run build

echo "✅ Build completed successfully!"

echo "📁 Build files are ready in the 'dist' folder"
echo ""
echo "🌐 To deploy to Netlify:"
echo "1. Go to https://netlify.com"
echo "2. Drag and drop the 'dist' folder to the Netlify dashboard"
echo "3. Your site will be deployed automatically!"
echo ""
echo "🔧 Or use Netlify CLI:"
echo "npm install -g netlify-cli"
echo "netlify login"
echo "netlify deploy --prod --dir=dist"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions" 