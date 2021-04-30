const path = require(`path`)
const crypto = require(`crypto`)

exports.onCreateNode =  async ({ node, actions, createNodeId }) => {
  if (node.internal.type === "StrapiBlogs") {
      const newNode = {
          id: createNodeId(`StrapiBlogContent-${node.id}`),
          parent: node.id,
          children: [],
          internal: {
              content: node.content || " ",
              type: "StrapiBlogContent",
              mediaType: "text/markdown",
              contentDigest: crypto
                  .createHash("md5")
                  .update(node.content || " ")
                  .digest("hex"),
          },
      };
      actions.createNode(newNode);
      actions.createParentChildLink({
          parent: node,
          child: newNode,
      });
    }
  }

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-template.js`)
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: blogPostTemplate,
      context: {
        slug: blog.slug,
      },
    })
  })
}
