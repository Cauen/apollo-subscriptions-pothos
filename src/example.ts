import ExpressApp from './server'

const PORT = 3002
async function startServer() {
  ExpressApp.listen(PORT, () => {
    console.log(`🚀 Query endpoint ready at http://localhost:${PORT}/graphql`);
  })
}

try {
  startServer()
} catch (err) {
  console.log({ startServerErr: err })
}
