# Data Files Documentation

This directory contains JSON data files that power the portfolio's dynamic content. These files are used to populate the Projects and Blogs pages with content.

## Files Overview

### 📁 `projects.json`
Contains project data for the portfolio's Projects page. Each project includes comprehensive information about the work done.

### 📁 `blogs.json`  
Contains blog post data for the portfolio's Blogs page. Each blog includes metadata and content information.

---

## 📝 Projects Data Structure (`projects.json`)

### Project Object Schema

```json
{
  "id": 1,                           // Unique identifier (required)
  "title": "Project Title",           // Project name (required)
  "description": "Project description...", // Brief description (required)
  "image": "https://example.com/image.jpg", // Project image URL (required)
  "technologies": ["React", "Node.js"], // Tech stack array (required)
  "category": "Full Stack",           // Project category (required)
  "liveDemo": "https://example.com",   // Live demo URL (optional)
  "githubRepo": "https://github.com/user/repo", // GitHub repo URL (optional)
  "featured": true,                   // Featured project flag (optional)
  "date": "2024-01-15"                // Project date (required)
}
```

### Required Fields
- `id`: Unique numeric identifier
- `title`: Project name (displayed prominently)
- `description`: Brief project description
- `image`: URL to project screenshot or mockup
- `technologies`: Array of technologies used
- `category`: Project category for filtering
- `date`: Project completion date

### Optional Fields
- `liveDemo`: URL to live demo/production site
- `githubRepo`: URL to GitHub repository
- `featured`: Boolean flag for featured projects

### Valid Categories
- "Full Stack"
- "Web App"
- "API Integration"
- "Analytics"
- "Media"
- "AI/ML"
- "Mobile"
- "Real Estate"
- "Education"
- "Blockchain"
- "Food Tech"
- "Career"

---

## 📝 Blogs Data Structure (`blogs.json`)

### Blog Object Schema

```json
{
  "id": 1,                           // Unique identifier (required)
  "title": "Blog Title",             // Blog post title (required)
  "slug": "blog-slug",               // URL-friendly slug (required)
  "excerpt": "Brief excerpt...",    // Short description (required)
  "content": "Full blog content...", // Complete blog content (required)
  "image": "https://example.com/image.jpg", // Blog image URL (required)
  "author": "Author Name",           // Author name (required)
  "date": "2024-01-15",              // Publication date (required)
  "readTime": "5 min read",         // Estimated reading time (required)
  "tags": ["tag1", "tag2"],          // Blog tags array (required)
  "featured": true                   // Featured blog flag (optional)
}
```

### Required Fields
- `id`: Unique numeric identifier
- `title`: Blog post title
- `slug`: URL-friendly slug (used in URL)
- `excerpt`: Short description for previews
- `content`: Full blog content
- `image`: Blog post image URL
- `author`: Author name
- `date`: Publication date
- `readTime`: Estimated reading time
- `tags`: Array of tags for categorization

### Optional Fields
- `featured`: Boolean flag for featured posts

---

## 🚀 How to Add New Content

### Adding a New Project

1. **Open `projects.json`**
2. **Add a new project object** to the array
3. **Ensure all required fields** are filled
4. **Use the next available ID** (increment by 1)
5. **Choose appropriate category** from the valid list
6. **Add image URL** (use high-quality screenshots)
7. **Include GitHub and demo URLs** if available

**Example:**
```json
{
  "id": 13,
  "title": "My New Project",
  "description": "A description of my awesome project",
  "image": "https://example.com/project-image.jpg",
  "technologies": ["React", "Node.js", "MongoDB"],
  "category": "Full Stack",
  "liveDemo": "https://myproject.vercel.app",
  "githubRepo": "https://github.com/username/myproject",
  "featured": false,
  "date": "2024-01-20"
}
```

### Adding a New Blog Post

1. **Open `blogs.json`**
2. **Add a new blog object** to the array
3. **Create a unique slug** (lowercase, hyphen-separated)
4. **Write compelling excerpt** (150-200 characters)
5. **Add full content** (can be HTML or markdown)
6. **Choose relevant tags** (3-5 tags recommended)
7. **Set estimated read time** (calculate based on word count)

**Example:**
```json
{
  "id": 13,
  "title": "My New Blog Post",
  "slug": "my-new-blog-post",
  "excerpt": "A brief description of what this blog post covers...",
  "content": "Full blog content goes here...",
  "image": "https://example.com/blog-image.jpg",
  "author": "Shivam Narayan",
  "date": "2024-01-20",
  "readTime": "7 min read",
  "tags": ["React", "JavaScript", "Tutorial"],
  "featured": false
}
```

---

## 📸 Image Guidelines

### Project Images
- **Size**: 1200x800px (3:2 ratio)
- **Format**: JPG or PNG
- **Quality**: High resolution, optimized for web
- **Content**: Project screenshots or mockups
- **Naming**: Descriptive filenames

### Blog Images
- **Size**: 1200x630px (1.9:1 ratio)
- **Format**: JPG or PNG
- **Quality**: High resolution, optimized for web
- **Content**: Relevant to blog topic
- **SEO**: Use descriptive alt text

---

## 🔧 Best Practices

### Content Management
1. **Keep IDs sequential** - Don't skip numbers
2. **Use consistent date format** - "YYYY-MM-DD"
3. **Write compelling descriptions** - Focus on value proposition
4. **Choose appropriate categories** - Helps with filtering
5. **Update featured content** - Rotate featured items regularly

### SEO Considerations
1. **Keyword-rich titles** - Include relevant tech terms
2. **Descriptive slugs** - Make them URL-friendly
3. **Quality descriptions** - Include key features and benefits
4. **Proper tagging** - Use relevant, specific tags
5. **Image optimization** - Use appropriate file sizes

### Maintenance
1. **Regular updates** - Add new projects and blog posts
2. **Content review** - Ensure information is current
3. **Link checking** - Verify demo and GitHub links work
4. **Image updates** - Replace outdated screenshots
5. **Content organization** - Keep categories and tags relevant

---

## 🚨 Important Notes

### Do's
- ✅ Use high-quality images
- ✅ Write detailed descriptions
- ✅ Include all required fields
- ✅ Test all links before publishing
- ✅ Keep content professional and relevant

### Don'ts
- ❌ Skip required fields
- ❌ Use placeholder content
- ❌ Forget to update IDs sequentially
- ❌ Use broken image links
- ❌ Include inappropriate content

---

## 📞 Support

If you need help with adding or updating content:
1. Check this documentation first
2. Review existing entries for examples
3. Test changes locally before deployment
4. Contact the development team for assistance

---

*Last Updated: January 2025*
