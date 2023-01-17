import ExpressApp from './server'

const PORT = 4000
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
