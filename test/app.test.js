const request = require('supertest')
const app = require('../server/app')
describe('Login', () => {
  it('should fail with incorrect credentials', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        email: 'dummy',
        password: 'demo'
      })
    expect(res.statusCode).toEqual(401)
    expect(res.body).toHaveProperty('message')
  })

  it('should succeed with correct credentials', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        email: 'demo',
        password: 'demo'
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({ email: 'demo' })
  })
})

describe('Logout', () => {
  it('should logout successfully', async () => {
    const res = await request(app).post('/auth/logout')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({ ok: true })
  })
})
