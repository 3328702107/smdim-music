const { defineConfig } = require('@vue/cli-service')

// Derive publicPath for GitHub Pages automatically in production.
// On Actions, GITHUB_REPOSITORY looks like "user/repo" → base becomes "/repo/".
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : ''
// If deploying to user/organization site like <user>.github.io, base should be '/'
const isUserSite = /\.github\.io$/.test(repoName)
const base = process.env.NODE_ENV === 'production' ? (isUserSite ? '/' : `/${repoName}/`) : '/'

module.exports = defineConfig({
  publicPath: base,
  transpileDependencies: true
})
