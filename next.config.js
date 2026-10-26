const path = require('path')

module.exports = {
    // lockfile outside this repo confuses workspace-root inference
    outputFileTracingRoot: path.join(__dirname),
    typescript: {
        ignoreBuildErrors: true
    },
    reactStrictMode: true
}