import { defineConfig } from 'cypress'
import fs from 'fs'

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3003',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    downloadsFolder: 'cypress/downloads',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      const envFilePath = 'cypress.env.json'
      if (fs.existsSync(envFilePath)) {
        const envVars = JSON.parse(fs.readFileSync(envFilePath, 'utf-8'))
        config.env = { ...config.env, ...envVars }
      }

      on('task', {
        getEnvVariable(key) {
          return process.env[key] || config.env[key] || null
        },
      })

      if (process.env.CYPRESS_ENV === 'development' || config.env.dev) {
        config.baseUrl = 'http://localhost:3003'
      } else if (process.env.CYPRESS_ENV === 'production' || config.env.prod) {
        config.baseUrl = 'https://mars.sfantini.us'
      }

      if (config.env.viewport === 'mobile') {
        config.viewportWidth = 375
        config.viewportHeight = 667
      } else if (config.env.viewport === 'desktop') {
        config.viewportWidth = 1280
        config.viewportHeight = 720
      }

      console.log(
        `Viewport set to: ${config.viewportWidth}x${config.viewportHeight}`,
      )

      console.log(`Running tests with baseUrl: ${config.baseUrl}`)

      return config
    },
  },
})
