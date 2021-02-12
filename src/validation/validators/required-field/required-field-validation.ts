import { FieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFieldError } from '@/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}
  fieldName: string

  validate (value: string): Error {
    return value ? null : new RequiredFieldError()
  }
}