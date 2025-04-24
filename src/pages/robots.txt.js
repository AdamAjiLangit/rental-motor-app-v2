
function Robots() {
    return null
}

export const getServerSideProps = async ({ res }) => {
    const content = `
User-agent: *
Allow: /

Sitemap: https://rentalmotorkudus.vercel.app/sitemap.xml
`.trim()

    res.setHeader('Content-Type', 'text/plain')
    res.write(content)
    res.end()

    return {
        props: {},
    }
}

export default Robots
