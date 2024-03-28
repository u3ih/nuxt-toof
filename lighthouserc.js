const baseUrl = `http://localhost:3000/`

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: 'yarn start',
      url: [baseUrl],
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'offscreen-images': 'off',
        'uses-webp-images': 'off',
        'uses-http2': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
