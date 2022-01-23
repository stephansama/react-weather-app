const fs = require('fs')
const path = './.env'
const variables = `
WEATHER_API=${process.env.WEATHER_API_NETLIFY}
BING_API=${process.env.BING_API_NETLIFY}
BING_HOST=${process.env.BING_HOST_NETLIFY}
BING_PATH=${process.env.BING_PATH_NETLIFY}
`

fs.writeFileSync(path, variables)
