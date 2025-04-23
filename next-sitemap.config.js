/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://rentalmotorkudus.vercel.app', // your site URL
    generateRobotsTxt: true, // also generates robots.txt
    changefreq: 'weekly', // default change frequency
    priority: 0.7, // default priority
    sitemapSize: 7000, // default max URLs per sitemap file
};