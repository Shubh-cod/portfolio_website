# Deploying to GitHub Pages

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Your code pushed to a GitHub repository

## Option 1: Automatic Deployment with GitHub Actions (Recommended)

This is the easiest method - your site will automatically deploy whenever you push to the `main` branch.

### Steps:

1. **Update the base path in `vite.config.js`**:
   - Open `vite.config.js`
   - Replace `'/portfolio_website/'` with `'/[your-repo-name]/'` (include the slashes)
   - For example, if your repo is named `my-portfolio`, change it to `'/my-portfolio/'`

2. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **Enable GitHub Pages in your repository**:
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** in the left sidebar
   - Under **Source**, select **GitHub Actions**
   - Save the changes

4. **Wait for deployment**:
   - Go to the **Actions** tab in your repository
   - You should see a workflow running called "Deploy to GitHub Pages"
   - Wait for it to complete (usually takes 1-2 minutes)

5. **Access your site**:
   - Once deployed, your site will be available at:
     `https://[your-username].github.io/[your-repo-name]/`
   - For example: `https://shubh.github.io/portfolio_website/`

## Option 2: Manual Deployment with gh-pages

If you prefer manual deployment:

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Update the base path** in `vite.config.js` (same as Option 1, step 1)

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under **Source**, select **Deploy from a branch**
   - Select branch: `gh-pages` and folder: `/ (root)`
   - Click Save

## Important Notes

- **Repository Name**: Make sure the base path in `vite.config.js` matches your repository name exactly (case-sensitive)
- **Custom Domain**: If you're using a custom domain, you can set the base to `'/'` instead
- **Branch Name**: If your default branch is `master` instead of `main`, update the workflow file `.github/workflows/deploy.yml` accordingly

## Troubleshooting

- **404 errors**: Check that the base path in `vite.config.js` matches your repository name
- **Build fails**: Make sure all dependencies are installed (`npm install`)
- **Site not updating**: Clear your browser cache or wait a few minutes for GitHub Pages to update

## Updating Your Site

With GitHub Actions (Option 1), simply push your changes:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The site will automatically rebuild and deploy!

