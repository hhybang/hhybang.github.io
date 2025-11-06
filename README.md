# Personal Website

This is my personal website built with Jekyll.

## Development

### Prerequisites

- Ruby (version 2.5 or higher)
- Bundler (`gem install bundler`)

### Setup

1. Install dependencies:
   ```bash
   bundle install
   ```

2. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

3. Visit `http://localhost:4000` in your browser

### Building for Production

```bash
bundle exec jekyll build
```

The site will be generated in the `_site` directory.

## Deployment to GitHub Pages

1. Create a new repository named `username.github.io` (replace `username` with your GitHub username)

2. Initialize git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

3. Enable GitHub Pages in repository settings (Settings > Pages > Source: main branch)

4. Your site will be available at `https://username.github.io`

## Customization

### Configuration

Edit `_config.yml` to update:
- Site title, email, and description
- Social media usernames
- Other site-wide settings

### Content

- **Home page**: Edit `index.markdown`
- **About page**: Edit `about.markdown`
- **Publications**: Edit `publications.markdown`
- **CV**: Edit `cv.markdown`

### Styling

- Modify SCSS files in `_sass/` directory:
  - `base.scss`: Base styles and typography
  - `layout.scss`: Layout and navigation styles
  - `pages.scss`: Page-specific styles

### Adding a Profile Image

1. Add your image to `assets/images/`
2. Uncomment the image line in `index.markdown` and update the path

### Adding Publications

You can add publications directly in `publications.markdown` or create individual files in the `_publications/` directory for more complex content management.

## License

Feel free to fork and customize this template for your own use!
