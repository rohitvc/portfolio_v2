const path = require(`path`)

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-template.js`)
  const result = await graphql(`
  {
    allMdx {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }
  `)
  
  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/blogs/${slug}`,
      component: blogPostTemplate,
      context: {
        slug: slug,
      },
    })
  })
}
