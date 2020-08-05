import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Thyago',
        email: 'thyago.vccunha@gmail.com',
        password: 'teste',
        passwordConfirmation: 'teste'
      })
      .expect(200)
  })
})
