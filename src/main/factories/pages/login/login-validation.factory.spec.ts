import { ValidationBuilder } from '@/validation/validators/builder/validation-builder'
import { ValidationComposite } from '@/validation/validators/validation-composite/validation-composite'
import { makeLoginValidation } from './login-validation-factory'

describe('LoginValidationFacotry', () => {
  test('Should compose ValidationComposite with correct validation', () => {
    const composite = makeLoginValidation()
    expect(composite).toEqual(ValidationComposite.build([
      ...ValidationBuilder.field('email').required().email().build(),
      ...ValidationBuilder.field('password').required().min(5).build()
    ]))
  })
})
