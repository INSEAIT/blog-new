const config = {
  // Site info
  siteTitle: "INSEA IT Blog", // Site title.
  siteTitleShort: "IT BLOG", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "INSEA IT", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://gb-template.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Ennabling INSEAistes to share knowledge", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteLang: "en",
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  postDefaultCategoryID: "", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 3,
  postsPerPage: 6,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "Posted on",
  // Use for comment
  lazyLoadComments: false,
  disqusShortname: "INSEA_IT", // Disqus shortname.
  btnLoadComments: "Load comments",
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: "Load more",
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: "Home",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "Page Not Found", // 
  pageNotFoundBtn: "Back to our site",
  pageNotFoundContent: "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  categoryHeader: "Posts in category", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Categories",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Latest posts",
  linksWidgetTitle: "Links",
  // Use for Google custom search
  searchWidgetTitle: "Looking for?",
  searchWidgetPlaceHolder: "Enter keyword",
  searchEngineID: "008548374781244864787:9ybvtnkbt7o",
  hasSearch: false,
  // Use for links widget
  sidebarSticky: true,
  sidebarLinks: [
    {
      label: "inseait.com",
      url: "https://inseait.com/"
    },
    {
      label: "IT village",
      url: "https://inseait.com/itvillage/"
    },
    {
      label: "Code in the dark",
      url: "https://inseait.com/code/"
    },
    {
      label: "Medium Blog",
      url: "https://medium.com/insea-it-blog"
    },
  ],
  // Use for user info
  userName: "INSEA IT", // Username to display in the author segment.
  userEmail: "inseaitclub@gmail.com", // Email used for RSS feed"s author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Rabat, Morocco", // User location to display in the author segment.
  userAvatar: "https://www.gravatar.com/avatar/42fd3d526fde1ef76d5002e4ebd303e9.jpg?s=300", // User avatar to display in the author segment.
  userDescription:
    "Software Engineer, Web Developer, JavaScript Lover & Blogger @completejavascript.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Email",
      url: "mailto:inseaitclub@gmail.com",
      iconClassName: "far envelope"
    },
    {
      label: "Website",
      url: "https://inseait.com/",
      iconClassName: "fas globe"
    },
    { 
      label: "Facebook", 
      url: "https://www.facebook.com/insea.it", 
      iconClassName: "fab facebook-f" 
    },
    { 
      label: "Linkedin", 
      url: "https://www.linkedin.com/company/insea-it/", 
      iconClassName: "fab linkedin-in"
    },
  ],
  // Use for navigation
  navTitle: "IT Blog",
  navLinks: [
    { label: "About", url: "/about" },
  ],
  // Use for footer
  socialLinks: [
    { 
      label: "GitHub",
      url: "https://github.com/INSEAIT",
      iconClassName: "fab github"
    },
    { 
      label: "Facebook", 
      url: "https://www.facebook.com/insea.it", 
      iconClassName: "fab facebook-f"
    },
    { 
      label: "Linkedin", 
      url: "https://www.linkedin.com/company/insea-it/", 
      iconClassName: "fab linkedin-in"
    },
    {
      label: "RSS",
      url: "https://gb-template.netlify.com/rss.xml",
      iconClassName: "fas rss"
    },
  ],
  footerLinks: [
    { label: "website", url: "https://inseait.com" },
    { label: "Hall of tanks", url: "https://inseait.com/thanks/" },
    { label: "IT village", url: "https://inseait.com/itvillage/" },
    { label: "Code in the dark", url: "https://inseait.com/code/" },
    { label: "Sitemap", url: "https://gb-template.netlify.com/sitemap.xml" },
  ],
  copyright: "It is through sharing knowledge,that our civilization come to be",
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
