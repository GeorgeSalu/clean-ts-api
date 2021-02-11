import { AccountModel } from '../models'
import { AuthenticationParams } from '../usecases/authentication'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccoutModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})
