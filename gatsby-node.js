const path = require('path')
exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    // const storeTemplate = path.resolve('src/templates/store.js')
    resolve(
      graphql(`
        {
          allContentfulPage {
            nodes {
              id
              updatedAt
              body {
                raw
              }
              createdAt
            }
          }
        }

      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        console.log(result)
        result.data.allContentfulPage.nodes.forEach((node) => {
          createPage ({
            path: node.id,
            component: Google: bind action creators createpage gatsby -- what value do I put in for component
            context: {
              slug: node.id
            }
          })
        })
        return
      })
    )
  })
}