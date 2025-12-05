#!/bin/bash

# Hostinger Git Deployment Setup Script
# Dieses Script committet alle Deployment-Dateien und pusht sie zu GitHub

set -e  # Exit on error

echo "🚀 Hostinger Git Deployment Setup"
echo "=================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Error: Not a git repository!"
    echo "Run: git init"
    exit 1
fi

# Check if GitHub remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ Error: No 'origin' remote found!"
    echo "Add remote: git remote add origin https://github.com/SiarCoding/haconcepts.git"
    exit 1
fi

echo "✅ Git repository detected"
echo "✅ Remote origin found"
echo ""

# Add deployment files
echo "📦 Adding deployment files..."
git add .github/workflows/deploy-hostinger.yml
git add HOSTINGER_GIT_DEPLOYMENT.md
git add HOSTINGER_DEPLOYMENT.md
git add next.config.js
git add package.json
git add public/.htaccess

# Commit
echo "💾 Committing changes..."
git commit -m "Setup Hostinger Git auto-deployment

- Add GitHub Actions workflow for automatic builds
- Configure Next.js for static export (output: 'export')
- Add .htaccess for proper routing on Hostinger
- Add deployment documentation

Changes:
- .github/workflows/deploy-hostinger.yml: Auto-build on push to main
- next.config.js: Set output to 'export' for static hosting
- public/.htaccess: Routing, caching, and security headers
- HOSTINGER_GIT_DEPLOYMENT.md: Complete setup guide
" || echo "No changes to commit"

# Push to main
echo "⬆️  Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Go to GitHub repo → Settings → Actions → General"
echo "   → Workflow permissions → Read and write permissions"
echo ""
echo "2. Check GitHub Actions: https://github.com/SiarCoding/haconcepts/actions"
echo "   → Wait for 'Deploy to Hostinger' workflow to complete"
echo ""
echo "3. Configure Hostinger Git:"
echo "   → Repository: https://github.com/SiarCoding/haconcepts.git"
echo "   → Branch: build (NOT main!)"
echo "   → Target: /public_html"
echo ""
echo "4. Test your website: https://yourdomain.com"
echo ""
echo "🎉 Done! Future pushes to 'main' will auto-deploy!"
