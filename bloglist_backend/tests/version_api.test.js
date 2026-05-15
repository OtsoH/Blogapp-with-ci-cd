const { test, after } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const { version } = require('../package.json')

const api = supertest(app)

test('version endpoint returns current version', async () => {
  const response = await api
    .get('/api/version')
    .expect(200)
    .expect('Content-Type', /application\/json/)

  assert.strictEqual(response.body.version, version)
})

after(async () => {
  await mongoose.connection.close()
})