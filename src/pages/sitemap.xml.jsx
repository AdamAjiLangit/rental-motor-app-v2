function Sitemap() {
    return null
}

export const getServerSideProps = async ({ res }) => {
    const baseUrl = 'https://rentalmotorkudus.vercel.app'

    const staticPages = [
        '',
        'katalog',
        'kontak',
        'tentang',
    ]

    const urls = staticPages.map((page) => {
        return `
      <url>
        <loc>${baseUrl}/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
    `
    })

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('')}
  </urlset>
  `

    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap)
    res.end()

    return {
        props: {},
    }
}

export default Sitemap
