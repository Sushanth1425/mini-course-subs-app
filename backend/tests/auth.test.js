const request= require('supertest')
const app= require('../server')
const mongoose= require('mongoose')

const email= `${Date.now()}@gmail.com`

describe('Auth API', ()=>{
  it('should login user', async()=>{
    await request(app).post('/api/auth/signup').send({
      name: `${Date.now()}`,
      email,
      password: "sush1234"
    })

    const res= await request(app).post('/api/auth/login').send({
      email,
      password: 'sush1234'
    })

    expect(res.statusCode).toBe(200)
    expect(res.body.token).toBeDefined()
  })
  afterAll(async()=> await mongoose.connection.close())
})