import { FieldValidationSpy } from '@/validation/test/'
import { ValidationComposite } from './validation-composite'
import faker from 'faker'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
  ]

  const sut = ValidationComposite.build(fieldValidationSpy)
  return {
    sut,
    fieldValidationSpy
  }
}

describe('ValidationComposite', () => {
  test('Should returna erro if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut, fieldValidationSpy } = makeSut(fieldName)
    const errorMessagem = faker.random.words()
    fieldValidationSpy[0].error = new Error(errorMessagem)
    fieldValidationSpy[1].error = new Error(faker.random.words())

    const error = sut.validate(fieldName, faker.random.word())
    expect(error).toBe(errorMessagem)
  })

  test('Should returna erro if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)
    const error = sut.validate('any_field', faker.random.word())
    expect(error).toBeFalsy()
  })
})
