export class InvalidCredentialError extends Error {
  constructor () {
    super('Credenciasi invalidas')
    this.name = 'InvalidCredentialError'
  }
}
