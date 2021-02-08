import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import Login from './login'
import { ValidationSpy } from '@/presentation/test'
import faker from 'faker'

type SutTypes = {
  sut: RenderResult
  valitationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const valitationSpy = new ValidationSpy()

  valitationSpy.errorMessage = faker.random.words()
  const sut = render(<Login validation={valitationSpy} />)
  return {
    sut,
    valitationSpy
  }
}

describe('Login component', () => {
  afterEach(cleanup)

  test('should start with initial state', () => {
    const { sut, valitationSpy } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe(valitationSpy.errorMessage)
    expect(emailStatus.textContent).toBe('🔴')
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(passwordStatus.textContent).toBe('🔴')
  })

  test('should call Validation with correct email', () => {
    const { sut, valitationSpy } = makeSut()
    const emailInput = sut.getByTestId('email')
    const email = faker.internet.email()
    fireEvent.input(emailInput, { target: { value: email } })
    expect(valitationSpy.fieldName).toBe('email')
    expect(valitationSpy.fieldValue).toBe(email)
  })

  test('should call Validation with correct password', () => {
    const { sut, valitationSpy } = makeSut()
    const passwordInput = sut.getByTestId('password')
    const password = faker.internet.password()
    fireEvent.input(passwordInput, { target: { value: password } })
    expect(valitationSpy.fieldName).toBe('password')
    expect(valitationSpy.fieldValue).toBe(password)
  })

  test('should show email error if validation fails', () => {
    const { sut, valitationSpy } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe(valitationSpy.errorMessage)
    expect(emailStatus.textContent).toBe('🔴')
  })
})
